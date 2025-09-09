import { useEffect, useState } from "react";
import useRetardo from "../../hooks/tiempo/useRetardo";
import { FetchDataProps, HttpMethod, UseApiProps } from "../modelos/Peticiones.interface";

function useApi<T>({ urlGet = null, adapterGet = null }: UseApiProps<T>) {
  const [response, setResponse] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorFetch, setErrorFetch] = useState<string | null>(null);
  const [controlador, setControlador] = useState<boolean>(false);

  const retardoRecetRetardo = useRetardo(() => { setResponse(null) }, 2000)
  
  useEffect(() => {
    if (controlador) {
      retardoRecetRetardo();
    }
  }, [controlador])

  const fetchData = async ({ url = null, bodyData = null, methodo = null, adapter = null }: FetchDataProps<T>) => {
    const urlLocal = url || urlGet;
    if (!urlLocal) throw new Error('No hay url en el pedido')

    const adapterLocal = adapter || adapterGet;

    setErrorFetch(null);
    setResponse(null);
    setLoading(true);
    const controller:AbortController = new AbortController();
    try {
      const res:Response = await fetch(urlLocal, {
        method: methodo || HttpMethod.GET,
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
        ...(bodyData && { 'body': bodyData })
      })

      if (!res.ok) {
        let errorMsg = 'La petición falló';
        try {
          const errorData = await res.json();
          errorMsg = errorData?.message || errorMsg;
        } catch (jsonErr) {
          console.error('No se pudo parsear la respuesta de error JSON:', jsonErr);
        }
        throw new Error(errorMsg);
      }
      const result = await res.json();
      const adapterData: T|null = adapterLocal ? adapterLocal(result) : result;
      
      setResponse(adapterData);
      setControlador(true);
      setErrorFetch(null);
    } catch (err) {
      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          console.log('Petición abortada');
        } else {
          setErrorFetch(`Error al intentar comunicarse con la base de datos: ${err.message}`);
          console.error(err);
        }
      } else setErrorFetch(`Ocurrió un error desconcido`);
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, response, loading, errorFetch };

}

export default useApi;
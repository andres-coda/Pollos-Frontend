import { AguaAdapter, AguaAdapterDtoCrear, AguaAdapterDtoEditar } from "../../adaptadores/agua.adaptador";
import { AguaProp } from "../../modelos/agua.esquema";
import { FormValuesAgua } from "../../modelos/formulario/agua.esquema";
import { AGUA } from "../../utils/endpoint";
import useApi from "../hooks/useApi";
import { HttpMethod } from "../modelos/Peticiones.interface";

const useAguaApi = () => {
  const { fetchData, response, loading, errorFetch } = useApi<AguaProp>({});
  
  const crearAgua = (data: FormValuesAgua) =>
    fetchData({ url: AGUA, methodo: HttpMethod.POST , bodyData: JSON.stringify(AguaAdapterDtoCrear(data)), adapter: AguaAdapter });

  const editarAgua = (data: FormValuesAgua, id:string) => 
    fetchData({ url: `${AGUA}/${id}`, methodo: HttpMethod.PUT , bodyData: JSON.stringify(AguaAdapterDtoEditar(data)), adapter: AguaAdapter });

  const obtenerAguaById = (id:string) =>
    fetchData({ url: `${AGUA}/${id}`, methodo: HttpMethod.GET, adapter: AguaAdapter });

  return { crearAgua, editarAgua, obtenerAguaById, responseAgua: response, loadingAgua: loading, errorFetchAgua: errorFetch };

}

export default useAguaApi
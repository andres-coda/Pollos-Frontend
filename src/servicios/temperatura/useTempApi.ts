import { TempAdapter, TempAdapterDtoCrear, TempAdapterDtoEditar } from "../../adaptadores/temp.adaptador";
import { TempProp } from "../../modelos/temperatura.esquema";
import { FormValuesTemp } from "../../modelos/formulario/temp.esquema";
import { LUGAR } from "../../utils/endpoint";
import useApi from "../hooks/useApi";
import { HttpMethod } from "../modelos/Peticiones.interface";

const useTempApi = () => {
  const { fetchData, response, loading, errorFetch } = useApi<TempProp>({});
  
  const crearTemp = (data: FormValuesTemp) =>
    fetchData({ url: LUGAR, methodo: HttpMethod.POST , bodyData: JSON.stringify(TempAdapterDtoCrear(data)), adapter: TempAdapter });

  const editarTemp = (data: FormValuesTemp, id:string) => 
    fetchData({ url: `${LUGAR}/${id}`, methodo: HttpMethod.PUT , bodyData: JSON.stringify(TempAdapterDtoEditar(data)), adapter: TempAdapter });

  const obtenerTempById = (id:string) =>
    fetchData({ url: `${LUGAR}/${id}`, methodo: HttpMethod.GET, adapter: TempAdapter });

  return { crearTemp, editarTemp, obtenerTempById, responseTemp: response, loadingTemp: loading, errorFetchTemp: errorFetch };

}

export default useTempApi
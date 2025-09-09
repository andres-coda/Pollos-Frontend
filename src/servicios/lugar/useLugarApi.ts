import { LugarAdapter, LugarAdapterDtoCrear, LugarAdapterDtoEditar } from "../../adaptadores/lugar.adaptador";
import { LugarProp } from "../../modelos/lugar.esquema";
import { FormValuesLugar } from "../../modelos/formulario/lugar.esquema";
import { LUGAR } from "../../utils/endpoint";
import useApi from "../hooks/useApi";
import { HttpMethod } from "../modelos/Peticiones.interface";

const useLugarApi = () => {
  const { fetchData, response, loading, errorFetch } = useApi<LugarProp>({});
  
  const crearLugar = (data: FormValuesLugar) =>
    fetchData({ url: LUGAR, methodo: HttpMethod.POST , bodyData: JSON.stringify(LugarAdapterDtoCrear(data)), adapter: LugarAdapter });

  const editarLugar = (data: FormValuesLugar, id:string) => 
    fetchData({ url: `${LUGAR}/${id}`, methodo: HttpMethod.PUT , bodyData: JSON.stringify(LugarAdapterDtoEditar(data)), adapter: LugarAdapter });

  const obtenerLugarById = (id:string) =>
    fetchData({ url: `${LUGAR}/${id}`, methodo: HttpMethod.GET, adapter: LugarAdapter });

  return { crearLugar, editarLugar, obtenerLugarById, responseLugar: response, loadingLugar: loading, errorFetchLugar: errorFetch };

}

export default useLugarApi
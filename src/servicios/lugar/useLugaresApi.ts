import { LugarAdapterArray } from "../../adaptadores/lugar.adaptador";
import { LugarProp } from "../../modelos/lugar.esquema";
import { LUGAR } from "../../utils/endpoint";
import useApi from "../hooks/useApi";
import { HttpMethod } from "../modelos/Peticiones.interface";

const useLugaresApi = () => {
  const { fetchData, response, loading, errorFetch } = useApi<LugarProp[]>({});
  const obtenerlugares = () =>
    fetchData({ url: LUGAR, methodo: HttpMethod.GET, adapter: LugarAdapterArray });

  return { obtenerlugares, responselugares: response, loadinglugares: loading, errorFetchlugares: errorFetch };

}

export default useLugaresApi
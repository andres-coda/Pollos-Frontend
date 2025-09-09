import { TempAdapterArray } from "../../adaptadores/temp.adaptador";
import { TempProp } from "../../modelos/temperatura.esquema";
import { AGUA } from "../../utils/endpoint";
import useApi from "../hooks/useApi";
import { HttpMethod } from "../modelos/Peticiones.interface";

const useTempsApi = () => {
  const { fetchData, response, loading, errorFetch } = useApi<TempProp[]>({});
  const obtenertemps = () =>
    fetchData({ url: AGUA, methodo: HttpMethod.GET, adapter: TempAdapterArray });

  return { obtenertemps, responsetemps: response, loadingtemps: loading, errorFetchtemps: errorFetch };

}

export default useTempsApi
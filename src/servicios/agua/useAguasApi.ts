import { AguaAdapterArray } from "../../adaptadores/agua.adaptador";
import { AguaProp } from "../../modelos/agua.esquema";
import { AGUA } from "../../utils/endpoint";
import useApi from "../hooks/useApi";
import { HttpMethod } from "../modelos/Peticiones.interface";

const useaguasApi = () => {
  const { fetchData, response, loading, errorFetch } = useApi<AguaProp[]>({});
  const obteneraguas = () =>
    fetchData({ url: AGUA, methodo: HttpMethod.GET, adapter: AguaAdapterArray });

  return { obteneraguas, responseaguas: response, loadingaguas: loading, errorFetchaguas: errorFetch };

}

export default useaguasApi
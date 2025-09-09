import { FocoAdapterArray } from "../../adaptadores/foco.adaptador";
import { FocoProp } from "../../modelos/foco.esquema";
import { FOCO } from "../../utils/endpoint";
import useApi from "../hooks/useApi";
import { HttpMethod } from "../modelos/Peticiones.interface";

const usefocosApi = () => {
  const { fetchData, response, loading, errorFetch } = useApi<FocoProp[]>({});
  const obtenerfocos = () =>
    fetchData({ url: FOCO, methodo: HttpMethod.GET, adapter: FocoAdapterArray });

  return { obtenerfocos, responsefocos: response, loadingfocos: loading, errorFetchfocos: errorFetch };

}

export default usefocosApi
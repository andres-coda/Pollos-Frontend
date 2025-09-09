import { FOCO } from "../../utils/endpoint";
import useApi from "../hooks/useApi";
import { HttpMethod } from "../modelos/Peticiones.interface";

const useFocoDeleteApi = () => {
  const { fetchData, response, loading, errorFetch } = useApi<boolean>({});

  const eliminarFoco = (id: string) =>
    fetchData({ url: `${FOCO}/${id}`, methodo: HttpMethod.DELETE });

  return { eliminarFoco, responseFoco: response, loadingFoco: loading, errorFetchFoco: errorFetch };

}

export default useFocoDeleteApi
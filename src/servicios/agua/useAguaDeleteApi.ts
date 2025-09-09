import { AGUA } from "../../utils/endpoint";
import useApi from "../hooks/useApi";
import { HttpMethod } from "../modelos/Peticiones.interface";

const useAguaDeleteApi = () => {
  const { fetchData, response, loading, errorFetch } = useApi<boolean>({});

  const eliminarAgua = (id: string) =>
    fetchData({ url: `${AGUA}/${id}`, methodo: HttpMethod.DELETE });

  return { eliminarAgua, responseAgua: response, loadingAgua: loading, errorFetchAgua: errorFetch };

}

export default useAguaDeleteApi
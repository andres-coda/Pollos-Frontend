import { LUGAR } from "../../utils/endpoint";
import useApi from "../hooks/useApi";
import { HttpMethod } from "../modelos/Peticiones.interface";

const useLugarDeleteApi = () => {
  const { fetchData, response, loading, errorFetch } = useApi<boolean>({});

  const eliminarLugar = (id: string) =>
    fetchData({ url: `${LUGAR}/${id}`, methodo: HttpMethod.DELETE });

  return { eliminarLugar, responseLugar: response, loadingLugar: loading, errorFetchLugar: errorFetch };

}

export default useLugarDeleteApi
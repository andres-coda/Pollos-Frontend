import { LUGAR } from "../../utils/endpoint";
import useApi from "../hooks/useApi";
import { HttpMethod } from "../modelos/Peticiones.interface";

const useTempDeleteApi = () => {
  const { fetchData, response, loading, errorFetch } = useApi<boolean>({});

  const eliminarTemp = (id: string) =>
    fetchData({ url: `${LUGAR}/${id}`, methodo: HttpMethod.DELETE });

  return { eliminarTemp, responseTemp: response, loadingTemp: loading, errorFetchTemp: errorFetch };

}

export default useTempDeleteApi
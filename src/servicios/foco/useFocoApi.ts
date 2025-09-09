import { FocoAdapter, FocoAdapterDtoCrear, FocoAdapterDtoEditar } from "../../adaptadores/foco.adaptador";
import { FocoProp } from "../../modelos/foco.esquema";
import { FormValuesFoco } from "../../modelos/formulario/foco.esquema";
import { FOCO } from "../../utils/endpoint";
import useApi from "../hooks/useApi";
import { HttpMethod } from "../modelos/Peticiones.interface";

const useFocoApi = () => {
  const { fetchData, response, loading, errorFetch } = useApi<FocoProp>({});
  
  const crearFoco = (data: FormValuesFoco) =>
    fetchData({ url: FOCO, methodo: HttpMethod.POST , bodyData: JSON.stringify(FocoAdapterDtoCrear(data)), adapter: FocoAdapter });

  const editarFoco = (data: FormValuesFoco, id:string) => 
    fetchData({ url: `${FOCO}/${id}`, methodo: HttpMethod.PUT , bodyData: JSON.stringify(FocoAdapterDtoEditar(data)), adapter: FocoAdapter });

  const obtenerFocoById = (id:string) =>
    fetchData({ url: `${FOCO}/${id}`, methodo: HttpMethod.GET, adapter: FocoAdapter });

  return { crearFoco, editarFoco, obtenerFocoById, responseFoco: response, loadingFoco: loading, errorFetchFoco: errorFetch };

}

export default useFocoApi
import Boton from "../../../componente-estilos/boton/boton";
import { FocoProp } from "../../../modelos/foco.esquema";
import useFocoApi from "../../../servicios/foco/useFocoApi";
import Foco from "../../../assets/icons/foco_prendido.svg?react"
import NoFoco from "../../../assets/icons/foco_apagado.svg?react"
import Texto from "../../../componente-estilos/texto/texto";

interface Prop{
    f:FocoProp
}
const FocoMostrar = ({f}:Prop) => {
  const { editarFoco } = useFocoApi();
  return (
     <div>

     <Boton
              key={f.id}
              icono={f.estado ? <Foco/> : <NoFoco/>}
              nuevoEstilo={`btn-icono-chico ${f.estado ? 'btn-prendido' : 'btn-apagado'}`}
              onClick={()=>editarFoco({nombre:f.nombre, estado:!f.estado}, f.id)}
              />
     <Texto texto={f.nombre} chica/>
              </div>
  )
}

export default FocoMostrar;
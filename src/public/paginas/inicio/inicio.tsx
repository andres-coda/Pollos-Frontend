import { zodResolver } from "@hookform/resolvers/zod";
import Centro from "../../../componente-estilos/centro/centro";
import Desplegable from "../../../componente/formulario/desplegable";
import { useGlobalContext } from "../../../contexto/contextoGlobal";
import { FormValuesInicio, inicio } from "../../../modelos/formulario/inicio.esquema";
import { useForm } from "react-hook-form";
import { PasarDesplegableLugar } from "../../../utils/formulario";
import Texto from "../../../componente-estilos/texto/texto";
import { useEffect, useState } from "react";
import { LugarProp } from "../../../modelos/lugar.esquema";
import Boton from "../../../componente-estilos/boton/boton";
import Foco from "../../../assets/icons/foco_prendido.svg?react"
import NoFoco from "../../../assets/icons/foco_apagado.svg?react"
import { FocoProp } from "../../../modelos/foco.esquema";
import useFocoApi from "../../../servicios/foco/useFocoApi";


const Inicio = () => {
  const { datos, setDatos } = useGlobalContext();
  const {editarFoco, responseFoco} = useFocoApi();
  const [id, setId]=useState<string>('')
  const [lugarActual,setLugarActual] = useState<LugarProp | null>(null)
  const { control, formState: { errors }, watch } = useForm<FormValuesInicio>({
    resolver: zodResolver(inicio),
    defaultValues: {
      lugar: '',
    }
  });
  useEffect(()=>{
    setId(watch().lugar)
  },[watch().lugar])
  useEffect(()=>{
    if(id){
      const lugar: LugarProp | undefined = datos?.lugar?.find(l=>l.id ===id)
      setLugarActual(lugar? lugar : null);
    }
  }, [id])

  useEffect(() => {
  if (!responseFoco) return;

  setDatos((prev) => {
    if (!prev) return prev;
    console.log('response', responseFoco);
    
    return {
      ...prev,
      lugar: prev.lugar.map((lugar) => {
        if (lugar.id !== id) return lugar;

        return {
          ...lugar,
          foco: lugar.foco.map((foco) =>
            foco.id === responseFoco.id ? responseFoco : foco
          ),
        };
      }),
    };
  });
}, [responseFoco]);


  const handleClick = (f:FocoProp) =>{
    editarFoco({nombre:f.nombre, estado:!f.estado},f.id)
  }

  if(!datos) return <Texto texto={"Todavía no hay lugares cargados"}/>
  return (
    <Centro>
      <Desplegable<FormValuesInicio> name='lugar' control={control} label='Lugar' error={errors.lugar} esquema={inicio} opciones={PasarDesplegableLugar(datos.lugar)} />

      <div>
        {
          lugarActual?.foco?.map(f=>(
            <Boton
              key={f.id}
              icono={f.estado ? <Foco/> : <NoFoco/>}
              nuevoEstilo={`btn-icono-chico ${f.estado ? 'btn-prendido' : 'btn-apagado'}`}
              onClick={()=>handleClick(f)}
            />
          ))
        }
      </div>
      <div>
      </div>
      <div>
      </div>
    </Centro>
  )
}

export default Inicio;
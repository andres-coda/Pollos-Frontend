import { zodResolver } from "@hookform/resolvers/zod";
import Centro from "../../../componente-estilos/centro/centro";
import Desplegable from "../../../componente/formulario/desplegable";
import { useGlobalContext } from "../../../contexto/contextoGlobal";
import { FormValuesInicio, inicio } from "../../../modelos/formulario/inicio.esquema";
import { useForm } from "react-hook-form";
import { PasarDesplegableLugar } from "../../../utils/formulario";
import Texto from "../../../componente-estilos/texto/texto";
import { useEffect, useState } from "react";
import FocoMostrar from "../foco/focoMostrar";


const Inicio = () => {
  const { datos } = useGlobalContext();
  const [id, setId]=useState<string>('')
  const { control, formState: { errors }, watch } = useForm<FormValuesInicio>({
    resolver: zodResolver(inicio),
    defaultValues: {
      lugar: '',
    }
  });
  useEffect(()=>{
    setId(watch().lugar)
  },[watch().lugar])

  if(!datos?.lugar) return <Texto texto={"Todavía no hay lugares cargados"}/>
  return (
    <Centro>
      <Desplegable<FormValuesInicio> name='lugar' control={control} label='Lugar' error={errors.lugar} esquema={inicio} opciones={PasarDesplegableLugar(datos.lugar)} />

      <div>
        {
          datos?.foco?.filter(f=> f.lugarId === id)
          .map(f=>(
            <FocoMostrar f={f}/>
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
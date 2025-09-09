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


const Inicio = () => {
  const { datos } = useGlobalContext();
  const [lugarActual,setLugarActual] = useState<LugarProp | null>(null)
  const { control, formState: { errors }, watch } = useForm<FormValuesInicio>({
    resolver: zodResolver(inicio),
    defaultValues: {
      lugar: '',
    }
  });
  useEffect(()=>{
    if(watch().lugar){
      const id:string =watch().lugar;
      const lugar: LugarProp | undefined = datos?.lugar?.find(l=>l.id ===id)
      setLugarActual(lugar? lugar : null);
    }
  }, [watch().lugar])

  if(!datos) return <Texto texto={"Todavía no hay lugares cargados"}/>
  return (
    <Centro>
      <Desplegable<FormValuesInicio> name='lugar' control={control} label='Lugar' error={errors.lugar} esquema={inicio} opciones={PasarDesplegableLugar(datos.lugar)} />

      <div>
        {
          lugarActual?.foco?.map(f=>(
            <Boton
              key={f.id}
              icono={<Foco/>}
              nuevoEstilo="btn-icono-chico"
              secundario
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
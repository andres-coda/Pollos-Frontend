import { useEffect } from "react";
import { useGlobalContext } from "../../contexto/contextoGlobal";
import { useModalContext } from "../../contexto/contextoModal";
import { AguaProp } from "../../modelos/agua.esquema";
import { FocoProp } from "../../modelos/foco.esquema";
import { LugarProp } from "../../modelos/lugar.esquema";
import { TempProp } from "../../modelos/temperatura.esquema";

interface Prop{
    agua?:boolean | undefined;
    foco?:boolean | undefined;
    temp?:boolean | undefined;
    lugar?:boolean | undefined;
    response: AguaProp | FocoProp | LugarProp | TempProp | null
}

function useFormulario({
    agua=undefined,
    foco=undefined,
    temp=undefined,
    lugar=undefined,
    response
}:Prop){
const { setEdit } = useGlobalContext();
const { setModal } = useModalContext();

useEffect(() => {
    if (response) {
      setEdit(prev => ({ ...prev, 
        ...(agua && {agua: undefined}),
        ...(foco && {foco: undefined}),
        ...(lugar && {lugar: undefined}),
        ...(temp && {temp: undefined}),    
    }))
      setModal(false);
    }
  }, [response])

  const onSecundario = () => {
    setModal(false)
  }

  return {onSecundario}

}

export default useFormulario;
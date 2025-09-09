import { useForm } from "react-hook-form";
import { useGlobalContext } from "../../../contexto/contextoGlobal";
import { zodResolver } from "@hookform/resolvers/zod";
import Formulario from "../../../componente/formulario/formulario";
import Input from "../../../componente/formulario/input";
import InputCheck from "../../../componente/formulario/inputCheck";
import useFormulario from "../../../hooks/formulario/useFormulario";
import useFocoApi from "../../../servicios/foco/useFocoApi";
import { foco, FormValuesFoco } from "../../../modelos/formulario/foco.esquema";


const CrearFoco = () => {
  const { crearFoco, editarFoco, loadingFoco, responseFoco, errorFetchFoco } = useFocoApi();
  const { edit } = useGlobalContext();
  const {onSecundario} = useFormulario({foco:true, response:responseFoco})
  const { control, handleSubmit, formState: { errors } } = useForm<FormValuesFoco>({
    resolver: zodResolver(foco),
    defaultValues: {
      nombre: edit?.foco?.nombre || '',
      estado: edit?.foco?.estado || false,
    }
  });

  const onSubmit = (data: FormValuesFoco) => {
    if (!edit?.foco?.id) {
      crearFoco(data);
    } else {
      editarFoco(data, edit.foco.id)
    }
  }

  return (
    <>
      <Formulario
        titulo={'Agregar sensor de foco'}
        onSubmit={handleSubmit(onSubmit)}
        onClickSecundario={onSecundario}
        loading={loadingFoco}
        errorFetch={errorFetchFoco}
      >
        <>
          <Input<FormValuesFoco> name='nombre' control={control} label='Nombre' tipo='text' error={errors.nombre} esquema={foco} />
          <InputCheck<FormValuesFoco> name='estado' control={control} label='Estado' tipo='checkbox' />
        </>
      </Formulario>
    </>
  )
}

export default CrearFoco;
import { useForm } from "react-hook-form";
import { useGlobalContext } from "../../../contexto/contextoGlobal";
import useAguaApi from "../../../servicios/agua/useAguaApi";
import { agua, FormValuesAgua } from "../../../modelos/formulario/agua.esquema";
import { zodResolver } from "@hookform/resolvers/zod";
import Formulario from "../../../componente/formulario/formulario";
import Input from "../../../componente/formulario/input";
import InputCheck from "../../../componente/formulario/inputCheck";
import useFormulario from "../../../hooks/formulario/useFormulario";


const CrearAgua = () => {
  const { crearAgua, editarAgua, loadingAgua, responseAgua, errorFetchAgua } = useAguaApi();
  const { edit } = useGlobalContext();
  const {onSecundario} = useFormulario({agua:true, response:responseAgua})
  const { control, handleSubmit, formState: { errors } } = useForm<FormValuesAgua>({
    resolver: zodResolver(agua),
    defaultValues: {
      nombre: edit?.agua?.nombre || '',
      estado: edit?.agua?.estado || false,
    }
  });

  const onSubmit = (data: FormValuesAgua) => {
    if (!edit?.agua?.id) {
      crearAgua(data);
    } else {
      editarAgua(data, edit.agua.id)
    }
  }

  return (
    <>
      <Formulario
        titulo={'Agregar sensor de agua'}
        onSubmit={handleSubmit(onSubmit)}
        onClickSecundario={onSecundario}
        loading={loadingAgua}
        errorFetch={errorFetchAgua}
      >
        <>
          <Input<FormValuesAgua> name='nombre' control={control} label='Nombre' tipo='text' error={errors.nombre} esquema={agua} />
          <InputCheck<FormValuesAgua> name='estado' control={control} label='Estado' tipo='checkbox' />
        </>
      </Formulario>
    </>
  )
}

export default CrearAgua;
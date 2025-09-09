import { useForm } from "react-hook-form";
import { useGlobalContext } from "../../../contexto/contextoGlobal";
import { zodResolver } from "@hookform/resolvers/zod";
import Formulario from "../../../componente/formulario/formulario";
import Input from "../../../componente/formulario/input";
import InputCheck from "../../../componente/formulario/inputCheck";
import useFormulario from "../../../hooks/formulario/useFormulario";
import { lugar, FormValuesLugar } from "../../../modelos/formulario/lugar.esquema";
import useLugarApi from "../../../servicios/lugar/useLugarApi";


const CrearLugar = () => {
  const { crearLugar, editarLugar, loadingLugar, responseLugar, errorFetchLugar } = useLugarApi();
  const { edit } = useGlobalContext();
  const {onSecundario} = useFormulario({lugar:true, response:responseLugar})
  const { control, handleSubmit, formState: { errors } } = useForm<FormValuesLugar>({
    resolver: zodResolver(lugar),
    defaultValues: {
      nombre: edit?.lugar?.nombre || '',
      estado: edit?.lugar?.estado || false,
    }
  });

  const onSubmit = (data: FormValuesLugar) => {
    if (!edit?.lugar?.id) {
      crearLugar(data);
    } else {
      editarLugar(data, edit.lugar.id)
    }
  }

  return (
    <>
      <Formulario
        titulo={'Agregar sensor de lugar'}
        onSubmit={handleSubmit(onSubmit)}
        onClickSecundario={onSecundario}
        loading={loadingLugar}
        errorFetch={errorFetchLugar}
      >
        <>
          <Input<FormValuesLugar> name='nombre' control={control} label='Nombre' tipo='text' error={errors.nombre} esquema={lugar} />
          <InputCheck<FormValuesLugar> name='estado' control={control} label='Estado' tipo='checkbox' />
        </>
      </Formulario>
    </>
  )
}

export default CrearLugar;
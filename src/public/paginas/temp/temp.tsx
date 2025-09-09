import { useForm } from "react-hook-form";
import { useGlobalContext } from "../../../contexto/contextoGlobal";
import { zodResolver } from "@hookform/resolvers/zod";
import Formulario from "../../../componente/formulario/formulario";
import Input from "../../../componente/formulario/input";
import useFormulario from "../../../hooks/formulario/useFormulario";
import { temp, FormValuesTemp } from "../../../modelos/formulario/temp.esquema";
import useTempApi from "../../../servicios/temperatura/useTempApi";


const CrearTemp = () => {
  const { crearTemp, editarTemp, loadingTemp, responseTemp, errorFetchTemp } = useTempApi();
  const { edit } = useGlobalContext();
  const {onSecundario} = useFormulario({temp:true, response:responseTemp})
  const { control, handleSubmit, formState: { errors } } = useForm<FormValuesTemp>({
    resolver: zodResolver(temp),
    defaultValues: {
      nombre: edit?.temp?.nombre || '',
      temperatura: edit?.temp?.temp || "",
    }
  });

  const onSubmit = (data: FormValuesTemp) => {
    if (!edit?.temp?.id) {
      crearTemp(data);
    } else {
      editarTemp(data, edit.temp.id)
    }
  }

  return (
    <>
      <Formulario
        titulo={'Agregar sensor de temperatura'}
        onSubmit={handleSubmit(onSubmit)}
        onClickSecundario={onSecundario}
        loading={loadingTemp}
        errorFetch={errorFetchTemp}
      >
        <>
          <Input<FormValuesTemp> name='nombre' control={control} label='Nombre' tipo='text' error={errors.nombre} esquema={temp} />
          <Input<FormValuesTemp> name='temperatura' control={control} label='Temperatura' tipo='text' error={errors.temperatura} esquema={temp} />
        </>
      </Formulario>
    </>
  )
}

export default CrearTemp;
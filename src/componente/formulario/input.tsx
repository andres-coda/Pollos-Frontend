import { Controller, FieldValues } from "react-hook-form";
import './input.css'
import { InputProps } from "./modelo/input.interface";
import Texto from "../../componente-estilos/texto/texto";
import { esCampoRequerido } from "../../utils/formulario";

const Input=<T extends FieldValues>({ 
  name, 
  control, 
  label, 
  tipo = undefined, 
  error = undefined, 
  alingDerecha = undefined, 
  onFocus, 
  onBlur,
  esquema
}: InputProps<T>)=> {
  return (
    <div className='inputs-span'>
      <span>{esCampoRequerido(esquema, name) && <Texto texto='*' derecha chica negrita error/>}</span>
      <div className={`inputs-entero ${error && 'is-invalida'} ${alingDerecha && 'alin-derecha'}`}>
        <Controller
          name={name}
          control={control}
          render={({ field }) =>
            <input
              id={String(name)}
              type={tipo}
              placeholder={" "}
              autoComplete="off"
              {...field}
              onFocus={onFocus}
              onBlur={onBlur}
            />}
        />
        <label htmlFor={String(name)}>
          {label}
          </label>
      </div>
      <span>{ error && <Texto texto={String(error.message)} error chica/>}</span>
    </div>
  )
}
export default Input;
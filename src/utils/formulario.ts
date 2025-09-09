import { ZodObject, ZodRawShape, ZodOptional, ZodNullable } from "zod";
import { LugarProp } from "../modelos/lugar.esquema";
import { Opcion } from "../componente/formulario/modelo/input.interface";

export function esCampoRequerido<T extends ZodRawShape>(
  esquema: ZodObject<T>,
  key: keyof T
): boolean {
  const campo = esquema.shape[key];

  // Si el campo es ZodOptional o ZodNullable, no es requerido
  return !(campo instanceof ZodOptional || campo instanceof ZodNullable);
}

export const PasarDesplegableLugar = (datos:LugarProp[]):Opcion[] =>{
  const opciones:Opcion[]=datos.map(d=>{
    return {value:d.id, label:d.nombre}
  });
  return opciones
}

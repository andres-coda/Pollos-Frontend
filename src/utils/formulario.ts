import { ZodObject, ZodRawShape, ZodOptional, ZodNullable } from "zod";

export function esCampoRequerido<T extends ZodRawShape>(
  esquema: ZodObject<T>,
  key: keyof T
): boolean {
  const campo = esquema.shape[key];

  // Si el campo es ZodOptional o ZodNullable, no es requerido
  return !(campo instanceof ZodOptional || campo instanceof ZodNullable);
}

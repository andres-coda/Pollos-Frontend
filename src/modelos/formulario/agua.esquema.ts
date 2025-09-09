import { z } from "zod";

export const agua = z.object({
  nombre: z.string().min(1, 'El nombre es obligatorio').max(20,"El nombre no puede tener mas de 20 caracteres"),
  estado: z.boolean()
})

export type FormValuesAgua = z.infer<typeof agua>;
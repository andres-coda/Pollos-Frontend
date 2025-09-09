import { z } from "zod";

export const temp = z.object({
  nombre: z.string().min(1, 'El nombre es obligatorio').max(20,"El nombre no puede tener mas de 20 caracteres"),
  temperatura: z.string().min(1, 'La temperatura es obligatoria').max(5,"La temperatura no puede tener mas de 5 caracteres"),
})

export type FormValuesTemp = z.infer<typeof temp>;
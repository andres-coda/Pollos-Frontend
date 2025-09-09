import { z } from "zod";

export const foco = z.object({
  nombre: z.string().min(1, 'El nombre es obligatorio').max(20,"El nombre no puede tener mas de 20 caracteres"),
  estado: z.boolean()
})

export type FormValuesFoco = z.infer<typeof foco>;
import { z } from "zod";

export const inicio = z.object({
  lugar: z.string()
})

export type FormValuesInicio = z.infer<typeof inicio>;
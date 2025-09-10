export enum Mens{
  CREAR = "create",
  EDITAR = "updeate",
  ELIMINAR = "deleted",
  REHACER = "rehacer"
}

export const Entidad = {
  "AGUA": "agua",
  "FOCO": "foco",
  "TEMPERATURA": "temperatura",
  "LUGAR":"lugar"
} as const;

type EntidadType =(typeof Entidad)[keyof typeof Entidad];

export interface Mensaje{
  mensaje:Mens;
  entidad:EntidadType;
  id:string;
}
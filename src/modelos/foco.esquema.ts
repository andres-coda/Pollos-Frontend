import { LugarAdapterProp } from "./lugar.esquema";

export interface FocoAdapterProp{
    id:string;
    nombre:string;
    estado:boolean;
    lugar:LugarAdapterProp;
}

export interface FocoProp{
    id:string;
    nombre:string;
    estado:boolean;
    lugarId:string;
}

export interface FocoDtoCrear{
    nombre:string;
    estado:boolean;
}

export interface FocoDtoEditar{
    estado:boolean;
}

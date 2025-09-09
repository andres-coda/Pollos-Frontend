import { AguaAdapterProp, AguaProp } from "./agua.esquema";
import { FocoAdapterProp, FocoProp } from "./foco.esquema";
import { TempAdapterProp, TempProp } from "./temperatura.esquema";

export interface LugarAdapterProp{
    id:string;
    nombre:string;
    estado:boolean;
    agua:AguaAdapterProp[];
    foco:FocoAdapterProp[];
    temp?:TempAdapterProp | undefined;
}

export interface LugarProp{
    id:string;
    nombre:string;
    estado:boolean;
    agua:AguaProp[];
    foco:FocoProp[];
    temp?:TempProp | undefined;
}

export interface LugarDtoCrear{
    nombre:string;
    estado:boolean;
}

export interface LugarDtoEditar{
    nombre:string;
    estado:boolean;
    foco?:string;
    agua?:string;
    temp?:string;
}

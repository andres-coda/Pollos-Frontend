export interface LugarAdapterProp{
    id:string;
    nombre:string;
    estado:boolean;
}

export interface LugarProp{
    id:string;
    nombre:string;
    estado:boolean;
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

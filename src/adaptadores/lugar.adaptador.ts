import { FormValuesLugar } from "../modelos/formulario/lugar.esquema";
import { LugarAdapterProp, LugarDtoCrear, LugarDtoEditar, LugarProp } from "../modelos/lugar.esquema";

export const LugarAdapter =(prop:LugarAdapterProp):LugarProp => {

    const lugar:LugarProp ={
        id:prop.id,
        nombre:prop.nombre,
        estado:prop.estado,
    }
    return lugar;
}

export const LugarAdapterArray =(prop:LugarAdapterProp[]):LugarProp[] => {
    const lugar:LugarProp[]= prop.map(a=>LugarAdapter(a));
    return lugar;
}

export const LugarAdapterDtoCrear = (prop:FormValuesLugar):LugarDtoCrear => {
    const lugar:LugarDtoCrear = {
        nombre:prop.nombre,
        estado: prop.estado
    }
    return lugar;
}

export const LugarAdapterDtoEditar = (prop:FormValuesLugar):LugarDtoEditar => {
    const lugar:LugarDtoEditar = {
        nombre: prop.nombre,
        estado: prop.estado,
        foco:undefined,
        agua:undefined,
        temp:undefined
    }
    return lugar;
}
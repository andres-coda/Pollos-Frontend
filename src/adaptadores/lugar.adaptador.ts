import { AguaProp } from "../modelos/agua.esquema";
import { FocoProp } from "../modelos/foco.esquema";
import { FormValuesLugar } from "../modelos/formulario/lugar.esquema";
import { LugarAdapterProp, LugarDtoCrear, LugarDtoEditar, LugarProp } from "../modelos/lugar.esquema";
import { TempProp } from "../modelos/temperatura.esquema";
import { AguaAdapterArray } from "./agua.adaptador";
import { FocoAdapterArray } from "./foco.adaptador";
import { TempAdapter } from "./temp.adaptador";
[]
export const LugarAdapter =(prop:LugarAdapterProp):LugarProp => {
    const agua:AguaProp[] = AguaAdapterArray(prop.agua);
    const foco:FocoProp[] = FocoAdapterArray(prop.foco);
    const temp:TempProp | undefined = prop.temp ? TempAdapter(prop.temp) : undefined;

    const lugar:LugarProp ={
        id:prop.id,
        nombre:prop.nombre,
        estado:prop.estado,
        agua,
        foco,
        temp
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
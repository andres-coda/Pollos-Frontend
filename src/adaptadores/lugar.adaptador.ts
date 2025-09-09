import { AguaProp } from "../modelos/agua.esquema";
import { FocoProp } from "../modelos/foco.esquema";
import { LugarAdapterProp, LugarProp } from "../modelos/lugar.esquema";
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
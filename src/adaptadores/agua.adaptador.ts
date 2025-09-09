import { AguaAdapterProp, AguaProp } from "../modelos/agua.esquema";

export const AguaAdapter =(prop:AguaAdapterProp):AguaProp => {
    const agua:AguaProp ={
        id:prop.id,
        nombre:prop.nombre,
        estado:prop.estado,
    }
    return agua;
}

export const AguaAdapterArray =(prop:AguaAdapterProp[]):AguaProp[] => {
    const agua:AguaProp[]= prop.map(a=>AguaAdapter(a));
    return agua;
}

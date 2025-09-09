import { FocoAdapterProp, FocoProp } from "../modelos/foco.esquema";

export const FocoAdapter =(prop:FocoAdapterProp):FocoProp => {
    const foco:FocoProp ={
        id:prop.id,
        nombre:prop.nombre,
        estado:prop.estado,
    }
    return foco;
}

export const FocoAdapterArray =(prop:FocoAdapterProp[]):FocoProp[] => {
    const foco:FocoProp[]= prop.map(f=>FocoAdapter(f));
    return foco;
}
import { FocoAdapterProp, FocoDtoCrear, FocoDtoEditar, FocoProp } from "../modelos/foco.esquema";
import { FormValuesFoco } from "../modelos/formulario/foco.esquema";

export const FocoAdapter =(prop:FocoAdapterProp):FocoProp => {
    const foco:FocoProp ={
        id:prop.id,
        nombre:prop.nombre,
        estado:prop.estado,
        lugarId: prop.lugar.id
    }
    return foco;
}

export const FocoAdapterArray =(prop:FocoAdapterProp[]):FocoProp[] => {
    const foco:FocoProp[]= prop.map(f=>FocoAdapter(f));
    return foco;
}

export const FocoAdapterDtoCrear = (prop:FormValuesFoco):FocoDtoCrear => {
    const foco:FocoDtoCrear = {
        nombre:prop.nombre,
        estado: prop.estado
    }
    return foco;
}

export const FocoAdapterDtoEditar = (prop:FormValuesFoco):FocoDtoEditar => {
    const foco:FocoDtoEditar = {
        estado: prop.estado
    }
    return foco;
}
import { AguaAdapterProp, AguaDtoCrear, AguaDtoEditar, AguaProp } from "../modelos/agua.esquema";
import { FormValuesAgua } from "../modelos/formulario/agua.esquema";

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

export const AguaAdapterDtoCrear = (prop:FormValuesAgua):AguaDtoCrear => {
    const agua:AguaDtoCrear = {
        nombre:prop.nombre,
        estado: prop.estado
    }
    return agua;
}

export const AguaAdapterDtoEditar = (prop:FormValuesAgua):AguaDtoEditar => {
    const agua:AguaDtoEditar = {
        estado: prop.estado
    }
    return agua;
}
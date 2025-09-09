import { FormValuesTemp } from "../modelos/formulario/temp.esquema";
import { TempAdapterProp, TempDtoCrear, TempDtoEditar, TempProp } from "../modelos/temperatura.esquema";

export const TempAdapter =(prop:TempAdapterProp):TempProp => {
    const temp:TempProp ={
        id:prop.id,
        nombre:prop.nombre,
        temp:prop.temperatura,
    }
    return temp;
}

export const TempAdapterArray = (prop:TempAdapterProp[]):TempProp[] => {
    const temp:TempProp[] = prop.map(t=> TempAdapter(t));
    return temp
}

export const TempAdapterDtoCrear = (prop:FormValuesTemp):TempDtoCrear => {
    const temp:TempDtoCrear = {
        nombre:prop.nombre,
        temperatura: prop.temperatura
    }
    return temp;
}

export const TempAdapterDtoEditar = (prop:FormValuesTemp):TempDtoEditar => {
    const temp:TempDtoEditar = {
        temperatura: prop.temperatura
    }
    return temp;
}
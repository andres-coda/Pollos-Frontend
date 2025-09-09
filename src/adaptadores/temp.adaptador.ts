import { TempAdapterProp, TempProp } from "../modelos/temperatura.esquema";

export const TempAdapter =(prop:TempAdapterProp):TempProp => {
    const temp:TempProp ={
        id:prop.id,
        nombre:prop.nombre,
        temp:prop.temperatura,
    }
    return temp;
}
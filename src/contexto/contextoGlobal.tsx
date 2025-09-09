import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import socket from "../sockets"
import { FocoProp } from "../modelos/foco.esquema";
import { AguaProp } from "../modelos/agua.esquema";
import { TempProp } from "../modelos/temperatura.esquema";
import { LugarProp } from "../modelos/lugar.esquema";

export interface LateralProp {
  titulo?: string | undefined;
}

export interface PropsModal {
  children: ReactNode;
}

interface GlobalContextEditProps {
  foco?:FocoProp | undefined;
  agua?:AguaProp | undefined;
  temp?:TempProp | undefined;
  lugar?: LugarProp | undefined;
}

interface GlobalContextProps {
  lugar:LugarProp | [];
}

export const contextGlobal = createContext<{
  datos: GlobalContextProps | null;
  setDatos: Dispatch<SetStateAction<GlobalContextProps | null>>;
  edit: GlobalContextEditProps | null;
  setEdit: Dispatch<SetStateAction<GlobalContextEditProps | null>>;
}>({
  datos: null,
  setDatos: () => null,
  edit: null,
  setEdit: () => null
});

export const ProveiderGlobalContext = ({ children }: PropsModal) => {
  const [datos, setDatos] = useState<GlobalContextProps | null>(null);
  const [edit, setEdit] = useState<GlobalContextEditProps | null>(null);

  useEffect(() => {
    socket.on('connect', () => console.log('Socket conectado:', socket.id));
    socket.on('disconnect', () => console.log('Socket desconectado'));
  }, []);

  return (
    <contextGlobal.Provider value={{ datos, setDatos, edit, setEdit }}>
      {children}
    </contextGlobal.Provider>
  )
}

export const useGlobalContext = () => {
  const contexto = useContext(contextGlobal);
  if (!contexto) {
    throw new Error('El contexto global se esta llamando fuera de su proveedor');
  }

  return contexto;
}
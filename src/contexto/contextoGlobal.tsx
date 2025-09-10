import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import socket from "../sockets"
import { FocoProp } from "../modelos/foco.esquema";
import { AguaProp } from "../modelos/agua.esquema";
import { TempProp } from "../modelos/temperatura.esquema";
import { LugarProp } from "../modelos/lugar.esquema";
import useLugaresApi from "../servicios/lugar/useLugaresApi";
import usefocosApi from "../servicios/foco/useFocosApi";
import useTempsApi from "../servicios/temperatura/useTemperaturasApi";
import useaguasApi from "../servicios/agua/useAguasApi";
import { Entidad, Mens, Mensaje } from "../modelos/socket.esquema";
import useFocoApi from "../servicios/foco/useFocoApi";
import useLugarApi from "../servicios/lugar/useLugarApi";
import useTempApi from "../servicios/temperatura/useTempApi";
import useAguaApi from "../servicios/agua/useAguaApi";

export interface LateralProp {
  titulo?: string | undefined;
}

export interface PropsModal {
  children: ReactNode;
}

interface GlobalContextEditProps {
  foco?: FocoProp | undefined;
  agua?: AguaProp | undefined;
  temp?: TempProp | undefined;
  lugar?: LugarProp | undefined;
}

interface GlobalContextProps {
  lugar?: LugarProp[] | undefined;
  foco?: FocoProp[] | undefined;
  agua?: AguaProp[] | undefined;
  temp?: TempProp[] | undefined;
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
  const { obtenerlugares, responselugares } = useLugaresApi()
  const { obtenerLugarById, responseLugar } = useLugarApi();
  const { obtenerfocos, responsefocos } = usefocosApi();
  const { obtenerFocoById, responseFoco } = useFocoApi()
  const { obtenertemps, responsetemps } = useTempsApi();
  const { obtenerTempById, responseTemp } = useTempApi()
  const { obteneraguas, responseaguas } = useaguasApi()
  const { obtenerAguaById, responseAgua } = useAguaApi();

  useEffect(() => {
    socket.on('connect', () => console.log('Socket conectado:', socket.id));
    socket.on('disconnect', () => console.log('Socket desconectado'));
  }, []);

  useEffect(() => {
    setDatos(prev => {
      const update: GlobalContextProps = prev || {
        lugar: [],
        agua: [],
        foco: [],
        temp: [],
      };
      if (responseaguas) {
        update.agua = responseaguas;
      }
      if (responseAgua) {
        const newAgua: AguaProp[] = update.agua ? update.agua.filter(a => a.id != responseAgua.id) : [];
        newAgua.push(responseAgua);
        update.agua = newAgua;
      }
      if (responselugares) {
        update.lugar = responselugares;
      }
      if (responseLugar) {
        const newLugares: LugarProp[] = update.lugar ? update.lugar.filter(l => l.id != responseLugar.id) : [];
        newLugares.push(responseLugar);
        update.lugar = newLugares;
      }
      if (responsetemps) {
        update.temp = responsetemps;
      }
      if (responseTemp) {
        const newTemp: TempProp[] = update.temp ? update.temp.filter(t => t.id != responseTemp.id) : [];
        newTemp.push(responseTemp);
        update.temp = newTemp;
      }
      if (responsefocos) {
        update.foco = responsefocos;
      }
      if (responseFoco) {
        const newArray: FocoProp[] = [...(prev?.foco || [])];
        const index:number = newArray.findIndex(f=>f.id === responseFoco.id);
        if(index === -1) {
          newArray.push(responseFoco)
        } else {
          newArray[index]=responseFoco;
        }
        update.foco = newArray.sort((a, b) =>
          a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' })
        );
      }
      return update;
    })
  }, [responselugares, responseLugar, responseaguas, responseAgua, responsefocos, responseFoco, responsetemps, responseTemp])

  useEffect(() => {
    obtenerlugares()
    obteneraguas()
    obtenerfocos()
    obtenertemps()

    socket.onAny((event, ...args) => {
      console.log(`Evento recibido: ${event}`, args);
    });

    const handleMensajeCrear = (data: Mensaje) => {
      if (data.entidad === Entidad.FOCO) {
        console.log("se llamo getbyidfoco");
        
        obtenerFocoById(data.id);
      }
      if (data.entidad === Entidad.LUGAR) {
        obtenerLugarById(data.id);
      }
      if (data.entidad === Entidad.TEMPERATURA) {
        obtenerTempById(data.id);
      }
      if (data.entidad === Entidad.AGUA) {
        obtenerAguaById(data.id);
      }
    };

    const handleMensajeEliminar = (data: Mensaje) => {
      setDatos(prev => {
      const updated = { ...prev };
      if(data.entidad === Entidad.FOCO){
        const newFocos: FocoProp[] = updated.foco ? updated.foco.filter(f => f.id != data.id) : [];
        updated.foco = newFocos;
      }
      if(data.entidad === Entidad.AGUA){
        const newAgua: AguaProp[] = updated.agua ? updated.agua.filter(a => a.id != data.id) : [];
        updated.agua = newAgua;
      }
      if(data.entidad === Entidad.TEMPERATURA){
        const newTemp: TempProp[] = updated.temp ? updated.temp.filter(t => t.id != data.id) : [];
        updated.temp = newTemp;
      }
      if(data.entidad === Entidad.LUGAR){
        const newLugares: LugarProp[] = updated.lugar ? updated.lugar.filter(l => l.id != data.id) : [];
        updated.lugar = newLugares;
      }
      return updated;
      })
    }

    socket.on(Mens.CREAR, handleMensajeCrear);
    socket.on(Mens.EDITAR, handleMensajeCrear);
    socket.on(Mens.ELIMINAR, handleMensajeEliminar)

    return () => {
      socket.off(Mens.CREAR, handleMensajeCrear); // ✅ limpia correctamente
      socket.off(Mens.EDITAR, handleMensajeCrear);
      socket.off(Mens.ELIMINAR, handleMensajeEliminar);
    };

  }, [])


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
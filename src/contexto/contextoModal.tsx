import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface PropsModal {
  children: ReactNode;
}

export const modalContexto = createContext<{
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}>({
  modal: false,
  setModal: () => null
});

export const ProveiderModalContext = ({ children }: PropsModal) => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <modalContexto.Provider value={{ setModal, modal }}>
      {children}
    </modalContexto.Provider>
  )
}

export const useModalContext = () => {
  const contexto = useContext(modalContexto);
  if (!contexto) {
    throw new Error('El modal se esta llamando fuera de su proveedor');
  }

  return contexto;
}
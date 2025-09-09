import { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Error from "../error/error";

interface RutaInvalidaProp {
  children: ReactNode;
}

const RutaInvalida = ({ children }: RutaInvalidaProp) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<Navigate to='/404'/>}/>
      <Route path="/404" element={<Error/>}/>
    </Routes>

  )
}

export default RutaInvalida;
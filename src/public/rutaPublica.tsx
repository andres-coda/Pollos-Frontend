import { Navigate, Route } from "react-router-dom";
import RutaInvalida from "../componente/ruta/rutaInvalida";
import { rutaPublica } from "./ruta/rutasPublicas";

const PublicoRuta = () => {
  return (
    <RutaInvalida>
      <Route path="/" element={<Navigate to={rutaPublica.INICIO} />}></Route>
    </RutaInvalida>
  )
}

export default PublicoRuta;
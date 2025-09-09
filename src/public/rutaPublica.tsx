import { Navigate, Route } from "react-router-dom";
import RutaInvalida from "../componente/ruta/rutaInvalida";
import { rutaPublica } from "./ruta/rutasPublicas";
import Inicio from "./paginas/inicio/inicio";

const PublicoRuta = () => {
  return (
    <RutaInvalida>
      <Route path="/" element={<Navigate to={rutaPublica.INICIO} />}></Route>
      <Route path={rutaPublica.INICIO} element={<Inicio />}/>
    </RutaInvalida>
  )
}

export default PublicoRuta;
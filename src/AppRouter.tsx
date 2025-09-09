import { Route } from "react-router-dom";
import RutaInvalida from "./componente/ruta/rutaInvalida";
import PublicoRuta from "./public/rutaPublica";

const AppRouter = () => {
  return (
    <RutaInvalida>
      <Route path="/*" element={<PublicoRuta/>} />
    </RutaInvalida>
  )
}

export default AppRouter;
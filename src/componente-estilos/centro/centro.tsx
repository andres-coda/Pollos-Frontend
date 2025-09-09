import { ReactNode } from "react"
import './centro.css'
import Titulo from "../texto/titulo";

interface CentroProp {
  children?: ReactNode | undefined;
  texto?:string;
}
export default function Centro({ children = undefined, texto = undefined }: CentroProp) {
  return (
    <div className="centro">
      {texto && <Titulo titulo={texto}/>}
      {children}
    </div>
  )
}
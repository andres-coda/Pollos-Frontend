import "./App.css";
import { ReactNode } from "react";


interface AppProp {
  children: ReactNode;
}
function App({ children }: AppProp) {

  return (
    <>
      <div className="general">
        {children}
      </div>
    </>
  )
}

export default App
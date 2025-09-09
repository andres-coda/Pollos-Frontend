import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ProveiderGlobalContext } from "./contexto/contextoGlobal";
import { ProveiderModalContext } from "./contexto/contextoModal";
import ErrorBoundary from "./ErrorBoundary";
import AppRouter from "./AppRouter";

const AppHookConteiner = () => {
  return (
    <ErrorBoundary>
      <ProveiderModalContext>        
        <BrowserRouter>
          <ProveiderGlobalContext>
           <App>
              <AppRouter />
            </App>
          </ProveiderGlobalContext>
        </BrowserRouter>
      </ProveiderModalContext>
    </ErrorBoundary>
  )
}

export default AppHookConteiner;
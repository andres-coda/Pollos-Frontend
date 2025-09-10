import React from "react";
import ReactDOM from "react-dom/client";
import AppHookConteiner from "./AppHookConteiner";
import './index.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppHookConteiner />
  </React.StrictMode>,
);

import { createRoot } from "react-dom/client";
import "./assets/global.css";
import { StrictMode } from "react";
import CursorTrail from "./tail";
import RouterConfig from "./lib/router/RouterConfig";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
  
      <RouterConfig />
    
  </StrictMode>,
);

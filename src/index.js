import { createRoot } from "react-dom/client";
import App from "./App";
import ReactGA from "react-ga";
import { StrictMode } from "react";

ReactGA.initialize("G-P7Z398R6GK");

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

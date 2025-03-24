import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import ReactGA from "react-ga4";

// ReactGA.initialize("googlee7a1d818ffede3b4")

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

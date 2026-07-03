import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/buttons.css";
import "./styles/pagination.css";
import { LoadingProvider } from "./context/LoadingContext.jsx";

AOS.init({
  duration: 1000,
  once: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </StrictMode>,
);

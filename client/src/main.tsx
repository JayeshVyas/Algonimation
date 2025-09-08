import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const application = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// If the window has been prerendered, hydrate instead of rendering from scratch
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, application);
} else {
  createRoot(rootElement).render(application);
}

// Support for react-snap
if ((window as any).snapSaveState) {
  (window as any).snapSaveState();
}

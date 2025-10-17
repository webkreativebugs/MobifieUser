import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { AppProvider } from "./context/AppContext.tsx";
import { AuthProvider } from "./context/auth_context/AuthContext.tsx";
import { OrganizationProvider } from "./context/org_context/OrganizationContext.tsx";
import { LoaderProvider } from "./context/loader_context/LoaderContext.tsx";
import { UiContextProvider } from "./context/ui_context/UiContext.tsx";
import { SaveChangesProvider } from "./context/ui_context/SaveChanges.tsx";
import { TabContextProvider } from "./context/org_context/TabContext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <OrganizationProvider>
          <AppProvider>
            <LoaderProvider>
              <SaveChangesProvider>
                <TabContextProvider>
                  <App />
                </TabContextProvider>
              </SaveChangesProvider>
            </LoaderProvider>
          </AppProvider>
        </OrganizationProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

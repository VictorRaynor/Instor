import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./context/UserContext";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

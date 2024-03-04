import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router basename="/">
      <StateProvider>
        <App />
      </StateProvider>
    </Router>
  </React.StrictMode>
);

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store/configureStore";
import ReactDOM from "react-dom/client";
import { AllRoutes } from "./Routes/index";
import "./assets/index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

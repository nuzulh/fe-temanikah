import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { legacy_createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer, createRootSagas } from "./redux";
import { Services, createServices } from "./services";
import { Toaster } from "react-hot-toast";

const sagaMiddleware = createSagaMiddleware();
const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));
const services = createServices(
  cb => cb(store.getState())
);
const startSagas = createRootSagas(
  services.logService,
  services.authService
);
sagaMiddleware.run(startSagas);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Services.Provider value={services}>
        <App />
        <Toaster />
      </Services.Provider>
    </Provider>
  </React.StrictMode>
);

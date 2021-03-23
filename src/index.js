import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppStateProvider } from "./containers/AppStateProvider";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

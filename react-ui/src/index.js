import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { QueryClient, QueryClientProvider } from "react-query";

import AppProvider from "./provider/AppProvider";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

const queryClient = new QueryClient();

ReactDOM.render(
  <AppProvider>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  </AppProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

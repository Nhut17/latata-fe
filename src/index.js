import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./assets/fonts/fontawesome-free-6.1.1-web/fontawesome-free-6.1.1-web/css/all.min.css";
import GlobalStyles from "./components/GlobalStyles/index.js";
import './components/GlobalStyles/GlobalStyles.scss'
import Layout from "./components/Layout";
import {Provider} from 'react-redux'
import { PersistGate } from "redux-persist/lib/integration/react";
// import store from "./store";
import { persistor, store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
    <Layout />

    </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
let persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// index.js

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "next/app";
import SignUp from "@/app/signup/page";

ReactDOM.render(
  <Provider store={store}>
    <App />
    <SignUp />
  </Provider>,
  document.getElementById("root")
);

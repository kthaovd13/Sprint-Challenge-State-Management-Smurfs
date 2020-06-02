import React, { cloneElement } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./components/App";

const store = createStore (reducer);
    function reducer () {
        return {
            title: "Redux Store"
        }
    }

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import AppRouter from "./Router/AppRouter";

// Main style
import "./styles/Base.scss";

const App = () => (
  <Provider store={}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));

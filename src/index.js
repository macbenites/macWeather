import ReactDom from "react-dom";
import { GlobalStyles } from "./global-styles";
import App from "./App";
ReactDom.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("app")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-5n2xk0fxr5c0v47q.us.auth0.com"
    clientId="raNSvxrcO0qlp6BZTZXdrcznR9PfO8yn"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

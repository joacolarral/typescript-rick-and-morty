import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StoreProvider } from "./Store";
import { Router, RouteComponentProps } from "@reach/router";
import Homepage from "./Homepage";
import Favpage from "./FavPage";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
  <StoreProvider>
    <React.StrictMode>
      <Router>
        <App path="/">
          <RouterPage pageComponent={<Homepage />} path="/" />
          <RouterPage pageComponent={<Favpage />} path="/favs" />
        </App>
      </Router>
    </React.StrictMode>
  </StoreProvider>,
  document.getElementById("root")
);

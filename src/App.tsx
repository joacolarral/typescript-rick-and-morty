import React, { useContext } from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";

export default function App(props: any): JSX.Element {
  const { state } = useContext(Store);

  return (
    <>
      <header className="header">
        <div>
          <h1>Rick & Morty</h1>
          <p> Pick your favourite episode!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <br />
          <Link to="/favs">Favs: {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </>
  );
}

import React from "react";
import "../index.css";

export default function Header(props) {
  const { countCartItems } = props;
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/Cart">
          Cart{" "}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ""
          )}
        </a>{" "}
        <a href="#/Signin">SignIn</a>
      </div>
    </header>
  );
}

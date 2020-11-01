import React from "react";
import "./NavBar.css";

function NavBar(props) {
  return (
    <>
      <ul className="navBar">
        <li>
          <a href="/">Hemsida</a>
        </li>
        <li>
          <a href="/biljetter">Biljetter</a>
        </li>
        <li>
          <a href="/om-oss">Om oss</a>
        </li>
      </ul>
    </>
  );
}

export default NavBar;

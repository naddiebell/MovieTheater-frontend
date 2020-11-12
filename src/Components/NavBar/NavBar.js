import React from "react";
import "./NavBar.css";

function NavBar(props) {
  return (
    <>
      <ul className="navBar">
        <li>
          <a href="/">
            <img
              className="logoImage"
              alt="alttest"
              src={require("../../background_img/logo_transparent_crop.png")}
            />
          </a>
        </li>
        <li>
          <a href="/biljetter"> Biljetter</a>
        </li>
        <li>
          <a href="/om-oss">Om oss</a>
        </li>
      </ul>
    </>
  );
}

export default NavBar;

/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
import React from "react";
import { Link } from "@reach/router";
import { useTranslation } from "react-i18next";
import "./NavBar.css";

function NavBar() {
  const { t, i18n } = useTranslation();
  const handleLanguage = (language) => {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  };

  return (
    <>
      <ul className="navBar">
        <li className="logoListItem" >
          <Link to="/" className="homeLink">
            <img
              className="logoImage"
              alt="home page"
              src={require("../../photos/camera_logo.png")}
            />
          </Link>
        </li>
        <li className="navPage">
          <Link className="navBarText" to="/biljetter"> {t("Tickets Button")}</Link>
        </li>
        <li className="navPage">
          <Link className="navBarText" to="/om-oss">{t("About Us")}</Link>
        </li>
        <div className="languageParent">
          <li
            className="navBarText"
            onClick={() => handleLanguage("en")}
          >
            EN
        </li>
          <li
            className="navBarText"
            onClick={() => handleLanguage("sv")}
          >
            SV
        </li>
        </div>
      </ul>
    </>
  );
}

export default NavBar;

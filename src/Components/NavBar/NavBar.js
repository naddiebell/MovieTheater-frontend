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
    console.log(localStorage.language);
    i18n.changeLanguage(language);
  };
  return (
    <>
      <ul className="navBar">
        <li>
          <Link to="/">
            <img
              className="logoImage"
              alt="alttest"
              src={require("../../background_img/logo_transparent_crop.png")}
            />
          </Link>
        </li>
        <li>
          <Link to="/biljetter"> {t("Tickets Button")}</Link>
        </li>
        <li>
          <Link to="/om-oss">{t("About Us")}</Link>
        </li>
        <button
          className="lang myButton"
          type="button"
          onClick={() => handleLanguage("en")}
        >
          EN
        </button>
        <button
          className="lang myButton"
          type="button"
          onClick={() => handleLanguage("sv")}
        >
          SV
        </button>
      </ul>
    </>
  );
}

export default NavBar;

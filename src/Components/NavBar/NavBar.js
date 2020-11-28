/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
import React from "react";
import { useTranslation } from "react-i18next";
import "./NavBar.css";

function NavBar() {
  const { t, i18n } = useTranslation();
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
          <a href="/biljetter"> {t("Tickets Button")}</a>
        </li>
        <li>
          <a href="/om-oss">{t("About Us")}</a>
        </li>
        <button type="button" onClick={() => i18n.changeLanguage("en")}>Språk</button>
      </ul>
    </>
  );
}

export default NavBar;

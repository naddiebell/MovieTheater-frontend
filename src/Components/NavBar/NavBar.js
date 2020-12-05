/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
import React from "react";
import { Link } from "@reach/router";
import { useTranslation } from "react-i18next";
import "./NavBar.css";

function NavBar() {
  const { t, i18n } = useTranslation();
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
        <button type="button" onClick={() => i18n.changeLanguage("en")}>Språk</button>
      </ul>
    </>
  );
}

export default NavBar;

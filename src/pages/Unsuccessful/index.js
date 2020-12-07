import React from "react";
import { useTranslation } from "react-i18next";

function Unsuccessful() {
  const { t } = useTranslation();
  return (
    <div className="unsuccessful">
      <p>{t("Unsuccess")}</p>
    </div>
  );
}

export default Unsuccessful;

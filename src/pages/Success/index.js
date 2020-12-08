import React from "react";
import axios from "axios";
import "./style.css";
import { useTranslation } from "react-i18next";

const emailjsId = process.env.REACT_APP_EMAILJS_ID;
const baseUrl = process.env.REACT_APP_BACKEND_URL;
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const emailJSApi = process.env.REACT_APP_EMAILJS_API;
const templateId = process.env.REACT_APP_EJS_TEMPLATE_ID;

function Success(props) {
  const { ticketId, children } = props;
  const { t } = useTranslation();

  const verifyPayment = async () => {
    const res = await axios.put(
      `${baseUrl}/api/v1/tickets/${ticketId}/validate`
    );
    return res.data;
  };

  const sendEmail = async () => {
    const ticketInfo = await verifyPayment();
    const adjustedPrice = ticketInfo.price / 100;
    const emailData = {
      service_id: serviceId,
      template_id: templateId,
      user_id: emailjsId,
      template_params: {
        to_name: ticketInfo.userName,
        user_email: ticketInfo.userEmail,
        film: ticketInfo.filmName,
        ticket_amount: ticketInfo.seatAmount,
        date: ticketInfo.date,
        price: adjustedPrice,
      },
    };
    await axios.post(emailJSApi, emailData);
  };
  sendEmail();

  return (
    <>
      {children}
      <div>
        <p className="sendEmail">{t("Email Success")}</p>
      </div>
    </>
  );
}

export default Success;

/* eslint-disable no-unused-vars */
import React from "react";
import emailjs from "emailjs-com";
import axios from "axios";

const emailjsId = process.env.REACT_APP_EMAILJS_ID;
const baseUrl = process.env.REACT_APP_BACKEND_URL;

function Success(props) {
  const { ticketId, children } = props;
  console.log("ticketID", ticketId);

  const verifyPayment = async () => {
    const repsonse = await axios.get(`${baseUrl}/api/v1/tickets/${ticketId}`, {
      id: "Payment Successful",
    });
    return repsonse.data;
  };

  console.log("response", verifyPayment());
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("contact_service", "contact_form", e.target, emailjsId)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      {children}
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="to_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Success;

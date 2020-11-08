import React from "react";
import emailjs from "emailjs-com";

const emailjsId = process.env.REACT_APP_EMAILJS_ID;
console.log("haaaa", emailjsId)

function Email() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("contact_service", "contact_form", e.target, "emailjsId")
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
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="to_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default Email;

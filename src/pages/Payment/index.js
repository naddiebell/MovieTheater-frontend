import React from "react";
import { loadStripe } from "@stripe/stripe-js";

let filmData = { filmName: "Mulan" };

const stripePK = process.env.REACT_APP_STRIPE_PUBLISHABLE;

const stripePromise = loadStripe(stripePK);

function Payment() {
  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const response = await fetch("/create-checkout-session", {
      method: "Post",
      body: filmData,
    })
      .then((resp) => resp.json())
      .then((res) => {
        console.log("Success:", res);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <button
      type="button"
      role="link"
      className="myButton"
      onClick={handleClick}
    >
      Till Kassan
    </button>
  );
}

export default Payment;

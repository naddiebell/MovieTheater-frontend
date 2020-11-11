import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePK = process.env.REACT_APP_STRIPE_PUBLISHABLE;

const stripePromise = loadStripe("stripePK");

function Payment() {
  return (
    <button type="button" role="link" className="myButton">
      Till Kassan
    </button>
  );
}

export default Payment;

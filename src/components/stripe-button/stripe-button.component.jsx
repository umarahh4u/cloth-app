import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey = `pk_test_51L5eDmILneFEVJhaPXcMu810outq4PCXaTv9UaSBmfi0ICYrlFCzMZEOJbIQp4x7acsUeZfIgxIIdun56svrWoSE00pVwl6P9F`;

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing LTD"
      billingAddress
      shippingAddress
      image="https://svgsphare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;

import { PayPalButton } from "react-paypal-button-v2";

export default class PayPalExpressCheckOut {
  render() {
    return (
      <PayPalButton
        amount="20.00"
        currency = "USD"
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);
          
          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID
            })
          });
        }}
        options={{
            clientId: "PRODAQ06pCXblDolitWGlI8oGp2k5kmvfKusKYjurcQ87wo-_ZkX5t3lrgqd9qFnAHrmZBEGq4ECTbiZfVOS"
        }}
      />
    );
  }
}
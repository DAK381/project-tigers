import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RecaptchaComponent = ({ handleRecapthca }) => {

  
  return (
    <ReCAPTCHA
      sitekey="6Lc8H-keAAAAAL5rCKgRycyv2NR2Shkx3MON-dni"
      onChange={handleRecapthca}
      theme = "dark"
    />
  );
};

export default RecaptchaComponent;
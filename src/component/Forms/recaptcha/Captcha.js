import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RecaptchaComponent = () => {
  function onChange(value) {
    console.log('Captcha value:', value);
  }
  return (
    <div className="RecaptchaComponent">
      <ReCAPTCHA
        sitekey="6Lesc7wfAAAAANkBrpuKvNbmQxWbjja3YoM0J8nE"
        onChange={onChange}
      />
    </div>
  );
};
export default RecaptchaComponent;

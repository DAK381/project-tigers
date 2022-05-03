import React, { useState } from "react";
import './ContactUs.css';

const FORM_ENDPOINT = "";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    
    <form class ="d-flex-column justify-content-start align-items-start ms-3"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div>
      <h1>
        CONTACT US FORM
       
      </h1>
      </div>
      <div>
        <label class ="mb-2" style = {{fontSize: 20}} className="ContactRequirements">Enter Your Name:</label>
        <input  class="w-50 p-2 d-flex" type="text" placeholder="Your Name" name="name" required />
      </div>
      <div>
      <label class ="mb-2 mt-2" style = {{fontSize: 20}} className="ContactRequirements">Enter Your Email:</label>
        <input class="w-50 p-2 d-flex" type="email" placeholder="Email" name="email" required />
      </div>
      <div>
      <label class ="mb-2 mt-2" style = {{fontSize: 20}} className="ContactRequirements">Enter Your Message:</label>
        <textarea class="w-50 p-2 d-flex" rows="5" placeholder="Your Message" name="message" required />
      </div>
      <div>
        <button type="submit"> SEND A MESSAGE </button>
      </div>
    </form>
  );
};

export default Contact;
import React, { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Contact Us 💌</h1>
      <p>Got a recipe suggestion or question? Send us a note!</p>

      {submitted ? (
        <p className="success-msg">Thanks for reaching out! 🌷</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" placeholder="Your name" required />

          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Message</label>
          <textarea placeholder="Say something sweet..." rows="4" required />

          <button type="submit">Send 💗</button>
        </form>
      )}
    </div>
  );
}

export default Contact;

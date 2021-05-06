import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div>
      <br /><br /><br /><br /><br /><br />
      <form onSubmit={handleSubmit}>
        <div className="auth-inner">
          <div className="centered">
            <img width="50" src="https://i.ibb.co/qmLk76K/icons8-b-64.png" />
          </div>
          <h3>Contact Us</h3>
          <br />
          <div className="my-1 p-1 bg-light rounded box-shadow">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div className="my-1 p-1 bg-light rounded box-shadow">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div className="my-1 p-1 bg-light rounded box-shadow">
            <label htmlFor="message">Message:</label>
            <textarea id="message" required />
          </div>
          <button type="submit">{status}</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
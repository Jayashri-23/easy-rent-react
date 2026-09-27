import React from 'react'

import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <div className="contact-page">
      <div className="contact-header">
        <p>CONTACT US</p>
        <h1>Let's talk about your next home</h1>
        <span>
          Have a question about a property? Send us a message.
        </span>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h2>Get in touch</h2>

          <p>
            We're here to help you find the right rental property.
          </p>

          <div className="contact-item">
            <strong>📧 Email</strong>
            <span>support@easyrent.com</span>
          </div>

          <div className="contact-item">
            <strong>📞 Phone</strong>
            <span>+91 98765 43210</span>
          </div>

          <div className="contact-item">
            <strong>📍 Location</strong>
            <span>Maharashtra, India</span>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <label>Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message</label>

          <textarea
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />

          <button type="submit">
            Send Message
          </button>

          {submitted && (
            <p className="success-message">
              Message sent successfully!
            </p>
          )}
        </form>

      </div>
    </div>
  );
}

export default Contact;
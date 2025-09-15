// src/components/ContactForm.jsx
import React, { useState } from 'react';
import './ContactForm.css'; // Import the CSS for styling

// You can use an icon library like 'react-icons' for the email and phone icons
// npm install react-icons
import { FiMail, FiPhone } from 'react-icons/fi';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for your message! We'll be in touch within 24 hours.");
    // Clear the form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      {/* Left Side: The Form */}
      <div className="form-section">
        <span className="get-in-touch">Get in Touch</span>
        <h2>Let's Chat, Reach Out to Us</h2>
        <p>
          Have questions or feedback? We're here to help. Send us a message,
          and we'll respond within 24 hours
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="name-fields">
            <div className="input-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Leave us message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>

      {/* Right Side: Image and Contact Info */}
      <div className="info-section">
        <div className="image-wrapper">
          {/* Use the actual image path here */}
          <img src="./assets/people.png" alt="A person smiling and using a phone" className="contact-image" />
        </div>
        <div className="contact-details">
          <div className="contact-item">
            <FiMail className="contact-icon" />
            <div>
              <span>Email</span>
              <p>ecell@nmit.ac.in</p>
            </div>
          </div>
          <div className="contact-item">
            <FiPhone className="contact-icon" />
            <div>
              <span>Phone</span>
              <p>(91) 839124 9231</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
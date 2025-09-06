// src/components/ContactForm.jsx (or directly in App.jsx if you prefer)

import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    // For now, we'll just log the data.
    // In a real app, you'd send this to a server.
    console.log("Form Submitted:", formData);
    alert("Thank you for your message! We'll be in touch.");
    // Clear the form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <p>Let's discuss what we can build together.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
        <input 
          type="email" 
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="subject"
          placeholder="Subject" 
          value={formData.subject}
          onChange={handleChange}
          required 
        />
        <textarea 
          name="message"
          placeholder="Your Message" 
          rows="5" 
          value={formData.message}
          onChange={handleChange}
          required>
        </textarea>
        <button type="submit" className="cta-button">Send Message</button>
      </form>
    </section>
  );
}

export default ContactForm;
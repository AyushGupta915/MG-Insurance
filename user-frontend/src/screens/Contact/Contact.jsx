import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post('https://mg-insurance-backend.onrender.com/api/contact', contactData); 
    toast.success('Your message has been sent!');
    setContactData({ name: '', email: '', message: '' });
  } catch (error) {
    console.error('Error sending message:', error);
    toast.error('Failed to send your message. Please try again.');
  }
};

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        
        <div className="form-group">
          <label className="form-label">Name:</label><br />
          <input
            type="text"
            name="name"
            required
            value={contactData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Your Name"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email:</label><br />
          <input
            type="email"
            name="email"
            required
            value={contactData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="Your Email"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Message:</label><br />
          <textarea
            name="message"
            rows="5"
            required
            value={contactData.message}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Write your message here..."
          />
        </div>

        <div className="form-button-container">
          <button type="submit" className="form-submit-button">Send Message</button>
        </div>

      </form>
    </div>
  );
};

export default Contact;

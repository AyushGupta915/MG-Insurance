import React, { useState } from 'react';
import './Quotes.css';
import axios from 'axios';
import {toast} from 'react-toastify';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    duration: '',
    type: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post('http://localhost:5000/api/send-quote', formData);
    alert('Quote submitted and email sent successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      duration: '',
      type: '',
      message: ''
    });
  } catch (error) {
    console.error('Email sending failed:', error);
    toast.error('Failed to send quote. Please try again later.');
  }
};

  return (
    <div className="quote-form-container">
      <h2 className="quote-form-heading">Request a Quote</h2>
      <form onSubmit={handleSubmit} className="quote-form">

        <div className="form-group">
          <label className="form-label">Name:</label><br />
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email:</label><br />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Phone:</label><br />
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Duration:</label><br />
          <select
            name="duration"
            required
            value={formData.duration}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select Duration</option>
            <option value="1">1 Year</option>
            <option value="5">5 Years</option>
            <option value="10">10 Years</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Insurance Type:</label><br />
          <select
            name="type"
            required
            value={formData.type}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select Type</option>
            <option value="health">Health Insurance</option>
            <option value="vehicle">Vehicle Insurance</option>
            <option value="travel">Travel Insurance</option>
            <option value="life">Life Insurance</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Message:</label><br />
          <textarea
            name="message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
          />
        </div>

        <div className="form-button-container">
          <button type="submit" className="form-submit-button">Submit Quote</button>
        </div>

      </form>
    </div>
  );
};

export default QuoteForm;

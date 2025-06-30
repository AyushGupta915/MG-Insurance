import React from 'react';
import { Link } from 'react-router-dom';
import './Plans.css';

const Plans = () => {
  const insurancePlans = [
    {
      title: 'Health Insurance',
      price: '₹499/month',
      features: ['Hospital Coverage', 'Doctor Visits', 'Prescription Drugs'],
    },
    {
      title: 'Vehicle Insurance',
      price: '₹699/month',
      features: ['Accident Protection', 'Theft Coverage', 'Third-party Liability'],
    },
    {
      title: 'Travel Insurance',
      price: '₹399/month',
      features: ['Trip Cancellation', 'Emergency Medical', 'Lost Luggage'],
    },
    {
      title: 'Life Insurance',
      price: '₹999/month',
      features: ['Death Benefit', 'Tax Savings', 'Long-term Coverage'],
    },
  ];

  return (
    <div className="plans-container">
      <h2 className="plans-heading">Our Insurance Plans</h2>

      {insurancePlans.map((plan, index) => (
        <div className="plan-card" key={index}>
          <h3 className="plan-title">{plan.title}</h3>
          <p className="plan-price"><strong>Price:</strong> {plan.price}</p>

          <ul className="plan-features">
            {plan.features.map((feature, i) => (
              <li key={i} className="plan-feature-item">{feature}</li>
            ))}
          </ul>

          <Link to="/quote" className="plan-button-link">
            <button className="plan-button">Get a Quote</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Plans;

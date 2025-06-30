import React from 'react';
import { FaHeartbeat, FaCarCrash, FaPlaneDeparture } from 'react-icons/fa';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
     <div class="home">
        <section class="hero-section">
            <h1 class="hero-title">Secure Your Future Today</h1>
            <h1 className='hero-title'>MG Insurance</h1>
            <p class="hero-subtitle">
                Find the best insurance plans tailored to your needs — health, vehicle, travel and more.
            </p>
            <Link to="/quote" className="cta-button">
                Get a Free Quote
            </Link>
        </section>

        <section class="services-section">
            <h2 class="services-title">Our Insurance Plans</h2>

            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">❤️</div>
                    <h3 class="service-title">Health Insurance</h3>
                    <p class="service-description">Comprehensive coverage for medical emergencies, hospitalizations and more.</p>
                </div>

                <div class="service-card">
                    <div class="service-icon">🚗</div>
                    <h3 class="service-title">Vehicle Insurance</h3>
                    <p class="service-description">Protect your car or bike from accidents, theft, and damages.</p>
                </div>

                <div class="service-card">
                    <div class="service-icon">✈️</div>
                    <h3 class="service-title">Travel Insurance</h3>
                    <p class="service-description">Safe and secure travel with emergency coverage for domestic and international trips.</p>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Home;

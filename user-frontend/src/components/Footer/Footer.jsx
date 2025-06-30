import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>
                    MG Insurance is your trusted digital insurance partner, offering simple,
                    secure, and affordable coverage across Health, Vehicle, Travel, and Life segments.
                </p>
                <p>
                    Whether you're planning a vacation, protecting your car, or securing your family's future,
                    MG Insurance ensures you're covered at every step of life.
                </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content center">
                <h2>
                    MG Insurance
                </h2>
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Reviews</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 9215320156</li>
                    <li>ag18012005@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p>© 2025 MG Insurance. All rights reserved.</p>
        <p>Terms of Service | Privacy Policy | FAQ</p>
    </div>
  )
}

export default footer
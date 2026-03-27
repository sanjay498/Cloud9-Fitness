import React from 'react';
import { Camera, MessageCircle, Send, MapPin, Phone, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <a href="#home" className="logo">
            Cloud 9 <span>Fitness</span>
          </a>
          <p className="footer-text">
            Transform your body and elevate your life with our state-of-the-art facilities and expert trainers.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon"><Camera size={20} /></a>
            <a href="#" className="social-icon"><MessageCircle size={20} /></a>
            <a href="#" className="social-icon"><Send size={20} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#plans">Membership Plans</a></li>
            <li><a href="#trainers">Our Trainers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact Info</h3>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>Walking Ground, USS Layout, Udumalaipettai, Tamil Nadu 642126</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+91 90802 52953</span>
            </li>
            <li>
              <Clock size={18} className="contact-icon" />
              <span>Open Daily: 5:00 AM - 9:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Cloud 9 Fitness Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

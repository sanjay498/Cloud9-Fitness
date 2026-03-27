import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>
        
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p className="contact-desc">Ready to start your fitness journey? Reach out to us or drop by our studio in Udumalaipettai.</p>
            
            <ul className="contact-list">
              <li>
                <div className="contact-icon"><MapPin size={24} /></div>
                <div>
                  <h4>Location</h4>
                  <p>Walking Ground, USS Layout, near Srinivasa School back gate, Gandhi Nagar, Udumalaipettai, Tamil Nadu 642126</p>
                </div>
              </li>
              <li>
                <div className="contact-icon"><Phone size={24} /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 90802 52953</p>
                  <a href="tel:+919080252953" className="text-cta">Call Now</a>
                </div>
              </li>
              <li>
                <div className="contact-icon"><Clock size={24} /></div>
                <div>
                  <h4>Timings</h4>
                  <p>Open daily: 5:00 AM - 9:00 PM</p>
                </div>
              </li>
            </ul>

            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15682.52988775432!2d77.2343!3d10.5833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDM1JzAwLjAiTiA3N8KwMTQnMDMuNSJF!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin" 
                width="100%" 
                height="250" 
                style={{ border: 0, borderRadius: '8px' }} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>

          <div className="contact-form-container">
            <h3>Send Us a Message</h3>
            <form className="contact-form" action="https://formsubmit.co/sanjaykyeri@gmail.com" method="POST">
              <input type="hidden" name="_subject" value="New GYM Enquiry from Cloud 9 Fitness!" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" required />
              </div>
              <div className="form-group">
                <label htmlFor="interest">Interested In</label>
                <select id="interest" name="interest">
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-building">Muscle Building</option>
                  <option value="personal-training">Personal Training</option>
                  <option value="general-fitness">General Fitness</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="How can we help you achieve your goals?"></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

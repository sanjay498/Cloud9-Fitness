import React from 'react';
import { Target, Users, ShieldCheck } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container about-container">
        <div className="about-image">
          <img src="https://loremflickr.com/1000/800/gym,fitness?lock=2" alt="Cloud 9 Fitness Interior" />
          <div className="experience-badge">
            <h3>10+</h3>
            <p>Years of <br />Experience</p>
          </div>
        </div>

        <div className="about-content">
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            The Story of <br /><span>Cloud 9 Fitness</span>
          </h2>
          <p className="about-text">
            Located in the heart of Udumalaipettai, Cloud 9 Fitness Studio was built with one goal in mind: creating an environment where everyone feels empowered to reach their true potential. We are a unisex facility welcoming beginners, seasoned athletes, and anyone ready to make a positive change.
          </p>
          
          <div className="about-features">
            <div className="feature">
              <div className="feature-icon"><Target size={24} /></div>
              <div>
                <h4>Our Mission</h4>
                <p>Helping people achieve their dream physique through dedicated guidance and world-class equipment.</p>
              </div>
            </div>
            
            <div className="feature">
              <div className="feature-icon"><Users size={24} /></div>
              <div>
                <h4>Inclusive Environment</h4>
                <p>A friendly, welcoming, and safe space for both men and women of all fitness levels.</p>
              </div>
            </div>
            
            <div className="feature">
              <div className="feature-icon"><ShieldCheck size={24} /></div>
              <div>
                <h4>Certified Trainers</h4>
                <p>Highly qualified professionals committed to your health, safety, and ultimate success.</p>
              </div>
            </div>
          </div>
          
          <a href="#trainers" className="btn btn-primary" style={{ marginTop: '2rem' }}>Meet Our Trainers</a>
        </div>
      </div>
    </section>
  );
};

export default About;

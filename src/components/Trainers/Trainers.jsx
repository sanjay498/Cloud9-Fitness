import React from 'react';
import { Camera, Send } from 'lucide-react';
import './Trainers.css';

const Trainers = () => {
  const trainers = [
    {
      name: 'Arjun Kumar',
      role: 'Head Strength Coach',
      image: 'https://loremflickr.com/500/500/fitness,portrait?lock=21'
    },
    {
      name: 'Priya Sharma',
      role: 'Yoga & Flexibility Expert',
      image: 'https://loremflickr.com/500/500/fitness,portrait?lock=22'
    },
    {
      name: 'Vikram Singh',
      role: 'CrossFit Instructor',
      image: 'https://loremflickr.com/500/500/fitness,portrait?lock=23'
    }
  ];

  return (
    <section id="trainers" className="section trainers">
      <div className="container">
        <h2 className="section-title">
          Meet Our <span>Trainers</span>
        </h2>
        
        <div className="trainers-grid">
          {trainers.map((trainer, index) => (
            <div className="trainer-card" key={index}>
              <div className="trainer-image">
                <img src={trainer.image} alt={trainer.name} />
                <div className="trainer-socials">
                  <a href="#"><Camera size={20} /></a>
                  <a href="#"><Send size={20} /></a>
                </div>
              </div>
              <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <p>{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;

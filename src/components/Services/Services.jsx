import React from 'react';
import { Dumbbell, Activity, Heart, UserPlus, Flame } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Dumbbell size={40} />,
      title: 'Strength Training',
      desc: 'Build muscle and increase raw power with our fully equipped free-weight and resistance training zones.',
    },
    {
      id: 2,
      icon: <Flame size={40} />,
      title: 'Weight Loss Programs',
      desc: 'Scientifically backed fitness routines and nutrition advice to help you shed pounds and keep them off.',
    },
    {
      id: 3,
      icon: <UserPlus size={40} />,
      title: 'Personal Training',
      desc: 'Get 1-on-1 coaching customized to your specific lifestyle, fitness level, and personal goals.',
    },
    {
      id: 4,
      icon: <Activity size={40} />,
      title: 'Muscle Building',
      desc: 'Hypertrophy-focused training plans utilizing modern biomechanics and state-of-the-art machines.',
    },
    {
      id: 5,
      icon: <Heart size={40} />,
      title: 'Cardio & Fitness',
      desc: 'High-intensity interval training, treadmills, ellipticals, and rowers for ultimate cardiovascular health.',
    },
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">
          Our Premium <span>Services</span>
        </h2>
        
        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

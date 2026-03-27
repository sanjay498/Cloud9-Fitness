import React from 'react';
import { Check } from 'lucide-react';
import './Plans.css';

const Plans = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₹999',
      period: '/month',
      features: [
        'Access to Cardio Zone',
        'Basic Free Weights',
        'Locker Room Access',
        '1 Free Fitness Consultation'
      ],
      recommended: false
    },
    {
      name: 'Standard',
      price: '₹1499',
      period: '/month',
      features: [
        'Full Gym Access',
        'Group Fitness Classes',
        'Locker & Shower Access',
        'Monthly Diet Plan',
        '1 Personal Training Session'
      ],
      recommended: true
    },
    {
      name: 'Premium',
      price: '₹2499',
      period: '/month',
      features: [
        'All Standard Features',
        'Unlimited Personal Training',
        'Customized Nutrition Plan',
        'Exclusive VIP Lounge',
        'Free Supplements Trial'
      ],
      recommended: false
    }
  ];

  return (
    <section id="plans" className="section plans">
      <div className="container">
        <h2 className="section-title">
          Flexible <span>Memberships</span>
        </h2>
        
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div className={`plan-card ${plan.recommended ? 'recommended' : ''}`} key={index}>
              {plan.recommended && <div className="plan-badge">Most Popular</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <ul className="plan-features">
                {plan.features.map((item, idx) => (
                  <li key={idx}>
                    <Check size={18} className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className={`btn ${plan.recommended ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%', marginTop: 'auto' }}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;

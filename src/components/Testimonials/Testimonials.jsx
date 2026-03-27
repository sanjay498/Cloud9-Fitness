import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Ramesh K.',
      text: 'Cloud 9 Fitness is hands down the best gym in Udumalaipettai. The trainers are incredibly supportive and the equipment is top-notch. Highly recommended!',
      rating: 5
    },
    {
      name: 'Anjali V.',
      text: 'I joined for the weight loss program, and it completely transformed my life. The clean and inclusive environment makes you want to work out every day.',
      rating: 5
    },
    {
      name: 'Suresh Menon',
      text: 'Great facility with professional coaches. It’s spacious, well-maintained, and has an amazing vibe. Definitely a 5-star experience.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            Member <span>Success Stories</span>
          </h2>
          <div className="overall-rating">
            <div className="stars">
              <Star fill="#FFD700" color="#FFD700" size={24} />
              <Star fill="#FFD700" color="#FFD700" size={24} />
              <Star fill="#FFD700" color="#FFD700" size={24} />
              <Star fill="#FFD700" color="#FFD700" size={24} />
              <Star fill="#FFD700" color="#FFD700" size={24} style={{ clipPath: 'polygon(0 0, 90% 0, 90% 100%, 0 100%)' }} />
            </div>
            <p><strong>4.9/5</strong> rating across 39 verified reviews on Google</p>
          </div>
        </div>
        
        <div className="testimonials-grid">
          {reviews.map((review, idx) => (
            <div className="testimonial-card" key={idx}>
              <Quote className="quote-icon" size={40} />
              <p className="testimonial-text">"{review.text}"</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{review.name}</h4>
                  <div className="author-stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} fill="#FFD700" color="#FFD700" size={14} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

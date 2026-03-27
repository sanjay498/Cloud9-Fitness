import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    'https://loremflickr.com/800/800/gym,workout?lock=11',
    'https://loremflickr.com/800/800/gym,workout?lock=12',
    'https://loremflickr.com/800/800/gym,workout?lock=13',
    'https://loremflickr.com/800/800/gym,workout?lock=14',
    'https://loremflickr.com/800/800/gym,workout?lock=15',
    'https://loremflickr.com/800/800/gym,workout?lock=16'
  ];

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section-title">
          Gym <span>Gallery</span>
        </h2>
        
        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div className="gallery-item" key={idx}>
              <img src={img} alt={`Gym Image ${idx + 1}`} loading="lazy" />
              <div className="gallery-overlay">
                <span>View Full</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

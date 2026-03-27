import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import './BmiCalculator.css';

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBmi = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
      
      if (bmiValue < 18.5) setStatus('Underweight');
      else if (bmiValue >= 18.5 && bmiValue < 24.9) setStatus('Normal Weight');
      else if (bmiValue >= 25 && bmiValue < 29.9) setStatus('Overweight');
      else setStatus('Obese');
    }
  };

  return (
    <section id="bmi" className="section bmi-section">
      <div className="container bmi-container">
        <div className="bmi-content">
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Calculate Your <span>BMI</span>
          </h2>
          <p className="bmi-desc">
            Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. Use this tool to discover your current fitness level.
          </p>
          
          <form className="bmi-form" onSubmit={calculateBmi}>
            <div className="form-row">
              <div className="form-group">
                <input 
                  type="number" 
                  placeholder="Height (cm)" 
                  value={height} 
                  onChange={(e) => setHeight(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="number" 
                  placeholder="Weight (kg)" 
                  value={weight} 
                  onChange={(e) => setWeight(e.target.value)} 
                  required 
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calculator size={20} /> Calculate Now
            </button>
          </form>

          {bmi && (
            <div className="bmi-result">
              <h3>Your BMI is: <span>{bmi}</span></h3>
              <p>Status: <strong className={status.toLowerCase().replace(' ', '-')}>{status}</strong></p>
            </div>
          )}
        </div>
        
        <div className="bmi-image">
          <img src="https://loremflickr.com/800/800/fitness,health?lock=3" alt="BMI Measurement" />
        </div>
      </div>
    </section>
  );
};

export default BmiCalculator;

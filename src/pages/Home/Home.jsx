// src/pages/Home/Home.jsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis'; // Note: latest is just 'lenis'

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Plans from '../../components/Plans/Plans';
import Trainers from '../../components/Trainers/Trainers';
import Gallery from '../../components/Gallery/Gallery';
import Testimonials from '../../components/Testimonials/Testimonials';
import BmiCalculator from '../../components/BmiCalculator/BmiCalculator';
import Contact from '../../components/Contact/Contact';
import WhatsAppWidget from '../../components/WhatsAppWidget/WhatsAppWidget';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState('Home');

  const navLinks = [
    { title: 'Home', selector: '#home' },
    { title: 'About Us', selector: '#about' },
    { title: 'Services', selector: '#services' },
    { title: 'Membership Plans', selector: '#plans' },
    { title: 'Trainers', selector: '#trainers' },
    { title: 'Gallery', selector: '#gallery' },
    { title: 'Testimonials', selector: '#testimonials' },
    { title: 'BMI Calculator', selector: '#bmi' },
    { title: 'Contact', selector: '#contact' },
  ];

  useEffect(() => {
    // Check if we are not on mobile to prevent heavy animations that could cause lag
    const isDesktop = window.innerWidth > 768;
    
    // Initialize Lenis smooth scroll (optimized for speed and responsiveness)
    const lenis = new Lenis({
      lerp: 0.08, // More responsive and kinetic feeling
      wheelMultiplier: 1.2,
      smoothTouch: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    });
    gsap.ticker.lagSmoothing(0);

    let ctx = gsap.context(() => {
      
      const sections = gsap.utils.toArray('section.section');
      const bgColors = [
        '#000000', // Hero
        '#0a0a0a', // About Us
        '#1a0505', // Services (deep red tint)
        '#050510', // Plans (deep blue tint)
        '#0a0a0a', // Trainers
        '#000000', // Gallery
        '#0a0a0a', // Testimonials
        '#1a0505', // BMI
        '#000000'  // Contact
      ];
      const homeWrapper = document.querySelector('.home-wrapper');
      
      sections.forEach((section, index) => {
        // 1. Navigation & Dynamic Background Color Highlighting
        ScrollTrigger.create({
          trigger: section,
          start: 'top 50%',
          end: 'bottom 50%',
          onToggle: (self) => {
            if (self.isActive && navLinks[index]) {
              setActiveSection(navLinks[index].title);
            }
          },
          onEnter: () => {
            if (bgColors[index] && homeWrapper) {
              gsap.to(homeWrapper, { backgroundColor: bgColors[index], duration: 1.2, ease: 'power2.inOut' });
            }
          },
          onEnterBack: () => {
            if (bgColors[index] && homeWrapper) {
              gsap.to(homeWrapper, { backgroundColor: bgColors[index], duration: 1.2, ease: 'power2.inOut' });
            }
          }
        });

        // 2. Cinematic Entrance Animation for Content
        if (isDesktop) {
          const elements = section.querySelectorAll('.section-title, p, .feature, .service-card, .plan-card, .trainer-card, .gallery-item, .contact-wrapper');
          
          if (elements.length > 0) {
            gsap.fromTo(elements, 
              { y: 80, opacity: 0, scale: 0.95 }, 
              { 
                y: 0, 
                opacity: 1, 
                scale: 1,
                stagger: 0.15, 
                duration: 1.2, 
                ease: 'power4.out',
                scrollTrigger: {
                  trigger: section,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse'
                }
              }
            );
          }
        }
      });
      
    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove((time)=>{
        lenis.raf(time * 1000)
      });
    };
  }, []);

  const scrollToSection = (selector) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-wrapper" ref={containerRef}>
      <Navbar />
      
      <div className="side-nav">
        {navLinks.map((link, idx) => (
          <div 
            key={idx} 
            className={`nav-dot ${activeSection === link.title ? 'active' : ''}`}
            onClick={() => scrollToSection(link.selector)}
            title={link.title}
          ></div>
        ))}
      </div>

      <main>
        <Hero />
        <About />
        <Services />
        <Plans />
        <Trainers />
        <Gallery />
        <Testimonials />
        <BmiCalculator />
        <Contact />
      </main>
      
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Home;

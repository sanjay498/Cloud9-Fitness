// src/components/Hero/Hero.jsx
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const fgRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const heroRef = useRef(null);
  const wrapperRef = useRef(null);

  // Fast, globally hosted video fetched directly from your Cloudinary CDN
  const videoUrl = 'https://res.cloudinary.com/dvsw7ugqm/video/upload/v1/cheetah_nhr0qg.mp4';

  useEffect(() => {
    // 0. Initial entrance animation for header content
    gsap.fromTo(['.hero-title', '.hero-cta'], 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power4.out', delay: 0.2 }
    );

    // 1. Zoom and fade animations for the Dual-Layer as you scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: '+=200%', 
        scrub: 1, // smooth scrubbing
        pin: wrapperRef.current, // pin the wrapper to viewport
      }
    });

    // Foreground scales up heavily and fades to simulate passing through it
    tl.to(fgRef.current, { scale: 1.3, y: 100, opacity: 0 }, 0);
    // Background blurs more and scales down
    tl.to(bgRef.current, { scale: 1.05, opacity: 0.3, filter: 'blur(40px)' }, 0);
    // Content moves up and fades out fast
    tl.to(contentRef.current, { y: -150, opacity: 0 }, 0);

  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-pin-wrapper" ref={wrapperRef}>
        
        {/* Dual-Layer Video System (Local MP4) */}
        <video 
          ref={bgRef}
          className="hero-bg-layer" 
          src={videoUrl}
          autoPlay
          loop
          muted 
          playsInline 
        ></video>
        
        <video 
          ref={fgRef}
          className="hero-fg-layer" 
          src={videoUrl}
          autoPlay
          loop
          muted 
          playsInline 
        ></video>
        
        <div className="hero-overlay"></div>
        
        <div className="container hero-container" ref={contentRef}>
          <div className="hero-content">
            <h1 className="hero-title">
              TRANSFORM YOUR BODY <br />
              UNLEASH YOUR STRENGTH
            </h1>
            
            <div className="hero-cta">
              <a href="#plans" className="btn btn-primary">JOIN NOW</a>
              <a href="#about" className="btn btn-outline">START TRAINING</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

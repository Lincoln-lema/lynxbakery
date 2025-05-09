import React, { useEffect } from 'react';
import './Aboutus.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Aboutus = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="aboutus-container">
      <div className="aboutus-header">
        <h1 data-aos="fade-down">Welcome to Lynx Bakery 🍰</h1>
        <p data-aos="fade-up">Where every bite tells a sweet story!</p>
      </div>

      <div className="aboutus-section" data-aos="fade-right">
        <video src="https://lincolin.pythonanywhere.com/static/images/cake.mp4" autoPlay muted loop playsInline />
        <div className="aboutus-text">
          <h2>Our Story</h2>
          <p>
            Lynx Bakery was born out of a dream to spread joy through cakes. We specialize solely in cakes, pouring our passion into each layer,
            glaze, and garnish. From birthdays to weddings and surprise treats, we make every celebration sweeter.
          </p>
        </div>
      </div>

      <div className="aboutus-section reverse" data-aos="fade-left">
        <video src="https://lincolin.pythonanywhere.com/static/images/baking.mp4" autoPlay muted loop playsInline />
        <div className="aboutus-text">
          <h2>Why Choose Lynx Bakery?</h2>
          <ul>
            <li>🎂 Pure cake focus – no distractions</li>
            <li>🧁 Fresh daily with real ingredients</li>
            <li>👩‍🍳 Experienced bakers & decorators</li>
            <li>🌍 Ethical sourcing & eco-conscious packaging</li>
            <li>🚚 Fast delivery & custom order options</li>
          </ul>
        </div>
      </div>

      <div className="aboutus-section" data-aos="fade-up">
        <video src="https://lincolin.pythonanywhere.com/static/images/bakers.mp4" autoPlay muted loop playsInline />
        <div className="aboutus-text">
          <h2>Meet the Team</h2>
          <p>
            Our team is a vibrant mix of passionate bakers, designers, and customer service pros. At Lynx Bakery, every cake is baked with
            precision, love, and creativity. We take pride in turning your ideas into edible art.
          </p>
        </div>
      </div>

      <div className="aboutus-section reverse" data-aos="zoom-in-up">
        <video src="https://lincolin.pythonanywhere.com/static/images/vision.mp4" autoPlay muted loop playsInline />
        <div className="aboutus-text">
          <h2>Our Vision</h2>
          <p>
            We envision a world where every celebration – big or small – has the perfect cake to match. Our goal is to be the #1 cake-only
            bakery known for creativity, reliability, and unforgettable flavor.
          </p>
        </div>
      </div>

      <div className="aboutus-section" data-aos="fade-up">
        <div className="aboutus-text">
          <h2>Customer Testimonials ❤️</h2>
          <p>
            “Best cake I’ve had in years! The design was exactly what I wanted.” – Sarah M.
          </p>
          <p>
            “The chocolate truffle cake literally melted in my mouth. 10/10.” – Brian K.
          </p>
          <p>
            “Ordered online and got my cake within hours. Great service!” – Amina W.
          </p>
        </div>
      </div>

      <div className="aboutus-cta" data-aos="fade-up">
        <h2>Let’s Bake Memories Together</h2>
        <p>Browse our selection or place a custom cake order now. Your dream dessert is just one click away.</p>
        <button onClick={() => window.location.href='/PlaceOrder'}>Order Now</button>
      </div>
    </div>
  );
};

export default Aboutus;

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext'; // Make sure the path is correct
import "./_carousel.scss";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 5;
  const { language } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrentIndex(prev => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const textContent = {
    pl: {
      heading: "Osiedle - Dębowa Aleja",
      description: `Aktualna inwestycja w Mińsku Mazowieckim w trakcie realizacji.
Celem przedsięwzięcia jest wykonanie domów wolnostojących w cenie mieszkania.

Szczegóły w zakładce INWESTYCJE.`
    },
    en: {
      heading: "Estate - Oak Avenue",
      description: `Current investment in Mińsk Mazowiecki under development.
The goal is to build detached houses for the price of an apartment.

Details in the INVESTMENTS section.`
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <svg onClick={prev} id="leftArrow" className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <g strokeLinejoin="round" strokeLinecap="round">
            <circle r="46" cx="50" cy="50" />
            <polyline points="60 25, 30 50, 60 75" />
          </g>
        </svg>

        <div className="carousel-content-wrapper">
          <div className="carousel-content">
            {[1, 2, 3, 4, 5].map((num, index) => (
              <section
                key={num}
                className={`slide slide_${num} ${currentIndex === index ? 'active' : 'inactive'}`}
              >
                <div className="slide_content">
                  <a href="/Inwestycje" className="slide_button button-option">
                    {textContent[language].heading}
                  </a>
                  <p className="slide_text">
                    {textContent[language].description}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </div>

        <svg onClick={next} id="rightArrow" className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <g strokeLinejoin="round" strokeLinecap="round">
            <circle r="46" cx="50" cy="50" />
            <polyline points="40 25, 70 50, 40 75" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Carousel;

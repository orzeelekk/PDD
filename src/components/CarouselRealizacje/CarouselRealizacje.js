import React, { useState } from 'react';
import "./_carouselRealizacje.scss";
import { useLanguage } from '../LanguageContext'; // ✅ use language context

const textContent = {
  pl: {
    opener: "Zapraszamy do galerii zdjęć naszych realizacji",
    description: "Poniżej znajdziesz galerię przedstawiającą wybrane realizacje, które wykonaliśmy w ramach naszych inwestycji. Każdy projekt to połączenie nowoczesnych rozwiązań architektonicznych z dbałością o najwyższą jakość wykonania. Nasze realizacje to nie tylko domy, ale także przestrzenie tworzone z myślą o komforcie i satysfakcji mieszkańców. Zobacz, jak wyglądają gotowe inwestycje – zarówno z zewnątrz, jak i wewnątrz – i przekonaj się o naszej solidności i profesjonalizmie.",
    slides: [
      {
        title: "Dom na Wilanowie",
        description: "Realizacja budowy i wykończenia domu pod klucz na Wilanowie."
      },
      {
        title: "Dom w Lubominie",
        description: "Kompleksowe wykonanie budowy oraz wykończenia domu w Lubominie."
      },
      {
        title: "Domy na osiedlu Emilianów Leśny",
        description: "Przebudowa budynków i wykończenie pod klucz na osiedlu Emilianów Leśny."
      },
      {
        title: "Kliniki Focus Clinic w Warszawie i Mińsku Mazowieckim",
        description: "Między innymi w Warszawie na ul. Niekłańska 41 oraz w Mińsku Mazowieckim na ul. Warszawskiej 141 i Konstytucji 3 Maja."
      }
    ]
  },
  en: {
    opener: "We invite you to the gallery of our completed projects",
    description: "Below you will find a gallery showcasing selected projects completed as part of our investments. Each project combines modern architectural solutions with attention to the highest quality of workmanship. Our realizations are not only houses but also spaces created with comfort and resident satisfaction in mind. See how our finished investments look – both inside and out – and discover our reliability and professionalism.",
    slides: [
      {
        title: "House in Wilanów",
        description: "Construction and turnkey finishing of a house in Wilanów."
      },
      {
        title: "House in Lubomin",
        description: "Comprehensive construction and finishing of a house in Lubomin."
      },
      {
        title: "Houses in Emilianów Leśny estate",
        description: "Reconstruction of buildings and turnkey finishing in Emilianów Leśny estate."
      },
      {
        title: "Focus Clinics in Warsaw and Mińsk Mazowiecki",
        description: "Including locations in Warsaw on Niekłańska 41 and in Mińsk Mazowiecki on Warszawska 141 and Konstytucji 3 Maja."
      }
    ]
  }
};

const CarouselRealizacje = () => {
  const { language } = useLanguage();
  const texts = textContent[language] || textContent.pl;
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < texts.slides.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="photosbox">
        <h1 className="photosbox_opener container">{texts.opener}</h1>
        <h3 className="photosbox_text container">{texts.description}</h3>
      </div>

      <div className="carousel-wrapper">
        <svg onClick={prev} id="leftArrow" className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <g strokeLinejoin="round" strokeLinecap="round">
            <circle r="46" cx="50" cy="50" />
            <polyline points="60 25, 30 50, 60 75" />
          </g>
        </svg>
        <div className="carousel-content-wrapper">
          <div className="carousel-content">
            {texts.slides.map((slide, index) => (
              <section
                key={index}
                className={`slide slide_realizacje_${index + 1} ${currentIndex === index ? 'active' : 'inactive'}`}
              >
                <div className="slide_content">
                  <a href="/realizacje" className="slide_button button-option">{slide.title}</a>
                  <p className="slide_text">{slide.description}</p>
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

export default CarouselRealizacje;

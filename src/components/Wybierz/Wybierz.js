import React, { useState } from 'react';
import "./_wybierz.scss";
import { daneTechniczne } from "./daneTechniczne";
import SpecDomki from "./SpecDomki";
import { useLanguage } from '../LanguageContext'; // adjust path if needed

const textContent = {
  pl: {
    chooseHouse: "Wybierz swój dom",
    available: "Dostępne",
    reserved: "Zarezerwowane",
    sold: "Sprzedane",
    houseC2: "Dom C-2",
    soldHouses: ["Dom A-1", "Dom B-1", "Dom B-2", "Dom C-1", "Dom C-3"],
    techHeader: "Dane techniczne domów",
  },
  en: {
    chooseHouse: "Choose your house",
    available: "Available",
    reserved: "Reserved",
    sold: "Sold",
    houseC2: "House C-2",
    soldHouses: ["House A-1", "House B-1", "House B-2", "House C-1", "House C-3"],
    techHeader: "Technical data of houses",
  },
};

const Wybierz = () => {
  const { language } = useLanguage(); // Get current language from context

  // State to track which house highlights are active
  const [highlightGreen, setHighlightGreen] = useState(false);
  const [highlightYellow, setHighlightYellow] = useState(false);
  const [highlightRed, setHighlightRed] = useState(false);

  // Handlers for toggling highlights
  const toggleGreenHighlight = () => setHighlightGreen(prev => !prev);
  const toggleYellowHighlight = () => setHighlightYellow(prev => !prev);
  const toggleRedHighlight = () => setHighlightRed(prev => !prev);

  const texts = textContent[language] || textContent.pl; // fallback to Polish

  return (
    <>
      <section className="wybierz">
        <div className="wybierz_container container">
          <div className="ChoseHouse">
            <div className="ChoseHouse_top">
              {texts.chooseHouse}
            </div>
            <div className="ChoseHouse_bottom">
              <div className="house_svg">
                {/* Green House Icon */}
                <span className={`house_icon green ${highlightGreen ? 'selected' : ''}`} onClick={toggleGreenHighlight}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M320.7 352c8.1-89.7 83.5-160 175.3-160c8.9 0 17.6 .7 26.1 1.9L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 69.7c-.1 .9-.1 1.8-.1 2.8l0 112c0 22.1 17.9 40 40 40l16 0c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2l31.9 0 24 0c22.1 0 40-17.9 40-40l0-24 0-64c0-17.7 14.3-32 32-32l64 0 .7 0zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z"/>
                  </svg>
                  <h1>{texts.available}</h1>
                </span>

                {/* Yellow House Icon */}
                <span className={`house_icon yellow ${highlightYellow ? 'selected' : ''}`} onClick={toggleYellowHighlight}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M320.7 352c8.1-89.7 83.5-160 175.3-160c8.9 0 17.6 .7 26.1 1.9L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 69.7c-.1 .9-.1 1.8-.1 2.8l0 112c0 22.1 17.9 40 40 40l16 0c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2l31.9 0 24 0c22.1 0 40-17.9 40-40l0-24 0-64c0-17.7 14.3-32 32-32l64 0 .7 0zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z"/>
                  </svg>
                  <h1>{texts.reserved}</h1>
                </span>

                {/* Red House Icon */}
                <span className={`house_icon red ${highlightRed ? 'selected' : ''}`} onClick={toggleRedHighlight}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M320.7 352c8.1-89.7 83.5-160 175.3-160c8.9 0 17.6 .7 26.1 1.9L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 69.7c-.1 .9-.1 1.8-.1 2.8l0 112c0 22.1 17.9 40 40 40l16 0c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2l31.9 0 24 0c22.1 0 40-17.9 40-40l0-24 0-64c0-17.7 14.3-32 32-32l64 0 .7 0zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z"/>
                  </svg>
                  <h1>{texts.sold}</h1>
                </span>
              </div>

              <div className="house_avaliable">
                {highlightGreen && (
                  <div className="highlight00 green-highlight00">
                    <h1>{texts.houseC2}</h1>
                  </div>
                )}
                {highlightYellow && (
                  <div className="highlight00 yellow-highlight00">
                    <h1>-</h1>
                  </div>
                )}
                {highlightRed && (
                  <div className="highlight00 red-highlight00">
                    {texts.soldHouses.map((house, idx) => (
                      <h1 key={idx}>{house}</h1>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="houseplan">
          {/* Possibly your commented out housemedia here */}
        </div>

        <div className="houseinfo container">
          <h1 className="houseinfo_header">{texts.techHeader}</h1>
          <div className="houseinfo_box">
            {(daneTechniczne[language] || daneTechniczne.pl).map((menu, index) => (
                <SpecDomki items={menu} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Wybierz;

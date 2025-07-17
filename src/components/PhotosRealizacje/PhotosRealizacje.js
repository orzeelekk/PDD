import React, { useState } from 'react';
import './_photosRealizacje.scss';

import { useLanguage } from '../LanguageContext'; // ✅ use language context

import FOCUS1 from '../Assets/FOCUS1.jpg';
import FOCUS2 from '../Assets/FOCUS2.jpg';
import FOCUS3 from '../Assets/FOCUS3.jpg';
import FOCUS4 from '../Assets/FOCUS4.jpg';
import FOCUS5 from '../Assets/FOCUS5.jpg';

import WINOGRONOWA1 from '../Assets/WINOGRONOWA1.jpg';
import WINOGRONOWA2 from '../Assets/WINOGRONOWA2.jpg';
import WINOGRONOWA3 from '../Assets/WINOGRONOWA3.jpg';
import WINOGRONOWA4 from '../Assets/WINOGRONOWA4.jpg';
import WINOGRONOWA5 from '../Assets/WINOGRONOWA5.jpg';

import ZWYCIEZCOW1 from '../Assets/ZWYCIEZCOW1.jpg';
import ZWYCIEZCOW2 from '../Assets/ZWYCIEZCOW2.jpg';
import ZWYCIEZCOW3 from '../Assets/ZWYCIEZCOW3.jpg';
import ZWYCIEZCOW4 from '../Assets/ZWYCIEZCOW4.jpg';
import ZWYCIEZCOW5 from '../Assets/ZWYCIEZCOW5.jpg';

import Zlota1 from '../Assets/ZLOTA1.jpg';
import Zlota2 from '../Assets/ZLOTA2.jpg';
import Zlota3 from '../Assets/ZLOTA3.jpg';
import Zlota4 from '../Assets/ZLOTA4.jpg';
import Zlota5 from '../Assets/ZLOTA5.jpg';

import EMILIANOW1 from '../Assets/EMILIANOWLESNY1.jpg';
import EMILIANOW2 from '../Assets/EMILIANOWLESNY2.jpg';
import EMILIANOW3 from '../Assets/EMILIANOWLESNY3.jpg';
import EMILIANOW4 from '../Assets/EMILIANOWLESNY4.jpg';
import EMILIANOW5 from '../Assets/EMILIANOWLESNY5.jpg';

import LUBOMIN1 from '../Assets/LUBOMIN1.jpg';
import LUBOMIN2 from '../Assets/LUBOMIN2.jpg';
import LUBOMIN3 from '../Assets/LUBOMIN3.jpg';
import LUBOMIN4 from '../Assets/LUBOMIN4.jpg';
import LUBOMIN5 from '../Assets/LUBOMIN5.jpg';

const photoGroups = {
  winogronowa: [
    WINOGRONOWA1,
    WINOGRONOWA2,
    WINOGRONOWA3,
    WINOGRONOWA4,
    WINOGRONOWA5,
  ],
  lubomin: [
    LUBOMIN1,
    LUBOMIN2,
    LUBOMIN3,
    LUBOMIN4,
    LUBOMIN5,
  ],
  emilianowLesny: [
    EMILIANOW1,
    EMILIANOW2,
    EMILIANOW3,
    EMILIANOW4,
    EMILIANOW5,
  ],
  focusClinic: [
    FOCUS1,
    FOCUS2,
    FOCUS3,
    FOCUS4,
    FOCUS5,
  ],
  zlota44: [
    Zlota1,
    Zlota2,
    Zlota3,
    Zlota4,
    Zlota5,
  ],
  zwyciezcow: [
    ZWYCIEZCOW1,
    ZWYCIEZCOW2,
    ZWYCIEZCOW3,
    ZWYCIEZCOW4,
    ZWYCIEZCOW5,
  ],
};

const PhotosRealizacje = () => {
  const { language } = useLanguage();

  // Translation keys for photo group titles
  const titles = {
    winogronowa: {
      pl: 'Realizacja budowy i wykończenia domu pod klucz na Wilanowie',
      en: 'Turnkey house construction and finishing project in Wilanów',
    },
    lubomin: {
      pl: 'Kompleksowe wykonanie budowy oraz wykończenia domu w Lubominie',
      en: 'Complete construction and finishing of a house in Lubomin',
    },
    emilianowLesny: {
      pl: 'Przebudowa budynku i wykończenie pod klucz na osiedlu Emilianów Leśny',
      en: 'Renovation and turnkey finishing in Emilianów Leśny estate',
    },
    focusClinic: {
      pl: 'Przebudowa i remont klinik dentystycznych FocusClinic',
      en: 'Renovation and remodeling of FocusClinic dental clinics',
    },
    zlota44: {
      pl: 'Pełne wykończenie luksusowych apartamentów pod adresem Złota 44',
      en: 'Complete finishing of luxury apartments at Złota 44',
    },
    zwyciezcow: {
      pl: 'Całościowe wykończenie mieszkania pod klucz na Saskiej Kępie',
      en: 'Full turnkey apartment finishing at Saska Kępa',
    },
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [photoGroup, setPhotoGroup] = useState([]);
  const [isFading, setIsFading] = useState(false);

  const openViewer = (groupKey, index) => {
    setPhotoGroup(photoGroups[groupKey]);
    setSelectedImage(photoGroups[groupKey][index]);
    setCurrentImageIndex(index);
  };

  const closeViewer = () => {
    setSelectedImage(null);
  };

  const handleImageTransition = (newIndex) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setSelectedImage(photoGroup[newIndex]);
      setIsFading(false);
    }, 500); // Match fade animation duration
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % photoGroup.length;
    handleImageTransition(newIndex);
  };

  const prevImage = () => {
    const newIndex =
      (currentImageIndex - 1 + photoGroup.length) % photoGroup.length;
    handleImageTransition(newIndex);
  };

  return (
    <div className="photo-container realizacje-container">
      {Object.keys(photoGroups).map((groupKey) => (
        <div className="photo-group" key={groupKey}>
          <h2 className="group-name">{titles[groupKey][language]}</h2>
          <div className="photos">
            {photoGroups[groupKey].map((photo, index) => (
              <img
                src={photo}
                alt="Photo_realisation"
                key={index}
                className="photo"
                onClick={() => openViewer(groupKey, index)}
              />
            ))}
          </div>
        </div>
      ))}

      {selectedImage && (
        <div className="viewer">
          <button className="close-btn" onClick={closeViewer}>
            &times;
          </button>

          <svg
            onClick={prevImage}
            id="leftArrow"
            className="arrow left"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <g strokeLinejoin="round" strokeLinecap="round">
              <circle r="46" cx="50" cy="50" />
              <polyline points="60 25, 30 50, 60 75"></polyline>
            </g>
          </svg>

          <div className={`image-wrapper ${isFading ? 'fade' : ''}`}>
            <img src={selectedImage} alt="Selected Realisation" />
          </div>

          <svg
            onClick={nextImage}
            id="rightArrow"
            className="arrow right"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <g strokeLinejoin="round" strokeLinecap="round">
              <circle r="46" cx="50" cy="50" />
              <polyline points="40 25, 70 50, 40 75"></polyline>
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};

export default PhotosRealizacje;

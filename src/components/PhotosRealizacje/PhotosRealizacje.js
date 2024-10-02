import React, { useState } from 'react';
import './_photosRealizacje.scss';

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

import FOCUS1 from '../Assets/FOCUS1.jpg';
import FOCUS2 from '../Assets/FOCUS2.jpg';
// import FOCUS2 from '../Assets/FOCUS2.jpg';
// import FOCUS2 from '../Assets/FOCUS2.jpg';
// import FOCUS2 from '../Assets/FOCUS2.jpg';

import KOLOBRZEG1 from '../Assets/KOLOBRZEG1.jpg';
import KOLOBRZEG2 from '../Assets/KOLOBRZEG2.jpg';
import KOLOBRZEG3 from '../Assets/KOLOBRZEG3.jpg';
import KOLOBRZEG4 from '../Assets/KOLOBRZEG4.jpg';
import KOLOBRZEG5 from '../Assets/KOLOBRZEG5.jpg';

const photoGroups = {
  FocusClinic: [
    FOCUS1,
    FOCUS2,
    FOCUS2,
    FOCUS2,
    FOCUS2,
  ],
  Zlota44: [
    Zlota1,
    Zlota2,
    Zlota3,
    Zlota4,
    Zlota5
  ],
  EmilianowLesny: [
    EMILIANOW1,
    EMILIANOW2,
    EMILIANOW3,
    EMILIANOW4,
    EMILIANOW5,
  ],
  Kolobrzeg: [
    KOLOBRZEG1,
    KOLOBRZEG2,
    KOLOBRZEG3,
    KOLOBRZEG4,
    KOLOBRZEG5,
  ],
};

const PhotosRealizacje = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [photoGroup, setPhotoGroup] = useState([]);

  const openViewer = (groupName, index) => {
    setPhotoGroup(photoGroups[groupName]);
    setSelectedImage(photoGroups[groupName][index]);
    setCurrentImageIndex(index);
  };

  const closeViewer = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photoGroup.length);
    setSelectedImage(photoGroup[(currentImageIndex + 1) % photoGroup.length]);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + photoGroup.length) % photoGroup.length
    );
    setSelectedImage(photoGroup[(currentImageIndex - 1 + photoGroup.length) % photoGroup.length]);
  };

  return (
    <div className="photo-container container">
      {Object.keys(photoGroups).map((groupName) => (
        <div className="photo-group" key={groupName}>
          <h2 className="group-name">{groupName}</h2>
          <div className="photos">
            {photoGroups[groupName].map((photo, index) => (
              <img
                src={photo}
                alt={`${groupName} - Image ${index + 1}`}
                key={index}
                className="photo"
                onClick={() => openViewer(groupName, index)}
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
          
          <svg onClick={prevImage} id="leftArrow" className="arrow left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <g strokeLinejoin="round" strokeLinecap="round">
              <circle r="46" cx="50" cy="50" />
              <polyline points="60 25, 30 50, 60 75"></polyline>
            </g>
          </svg>

          <img
            src={selectedImage}
            alt="Selected"
            className="selected-image"
          />
          
          <svg onClick={nextImage} id="rightArrow" className="arrow right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
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

import React, { useState } from 'react';
import './_photosRealisation.scss';

import BUDOWA1 from '../Assets/BUDOWA1.jpg'
import BUDOWA2 from '../Assets/BUDOWA2.jpg'
import BUDOWA3 from '../Assets/BUDOWA3.jpg'
import BUDOWA4 from '../Assets/BUDOWA4.jpg'
import BUDOWA5 from '../Assets/BUDOWA5.jpg'

import DROGA1 from '../Assets/DROGA1.jpg';
import DROGA2 from '../Assets/DROGA2.jpg';
import DROGA3 from '../Assets/DROGA3.jpg';
import DROGA4 from '../Assets/DROGA4.jpg';
import DROGA5 from '../Assets/DROGA5.jpg';


import PLAC1 from '../Assets/PLAC1.jpg';
import PLAC2 from '../Assets/PLAC2.jpg';
import PLAC3 from '../Assets/PLAC3.jpg';
import PLAC4 from '../Assets/PLAC4.jpg';
import PLAC5 from '../Assets/PLAC5.jpg';


import BOISKO1 from '../Assets/BOISKO1.jpg';
import BOISKO2 from '../Assets/BOISKO2.jpg';
import BOISKO3 from '../Assets/BOISKO3.jpg';
import BOISKO4 from '../Assets/BOISKO4.jpg';
import BOISKO5 from '../Assets/BOISKO5.jpg';



const photoGroups = {
  Dziennik_Budowy: [
    BUDOWA1,
    BUDOWA2,
    BUDOWA3,
    BUDOWA4,
    BUDOWA5,
  ],
  Droga_Dojazdowa: [
    DROGA1,
    DROGA2,
    DROGA3,
    DROGA4,
    DROGA5,
  ],
  Plac_Zabaw: [
    PLAC1,
    PLAC2,
    PLAC3,
    PLAC4,
    PLAC5,
  ],
  Boiska: [
    BOISKO1,
    BOISKO2,
    BOISKO3,
    BOISKO4,
    BOISKO5,
  ],
};

const PhotosRealisation = () => {
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
          <h2 class>{groupName}</h2>
          <div className="photos">
            {photoGroups[groupName].map((photo, index) => (
              <img
                src={photo}
                alt={`${groupName} photo ${index + 1}`}
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
          <button className="nav-btn" onClick={prevImage}>
            &#10094;
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="selected-image"
          />
          <button className="nav-btn" onClick={nextImage}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotosRealisation;

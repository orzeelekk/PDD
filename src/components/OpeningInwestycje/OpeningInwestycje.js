import React, { useState,useRef } from 'react';
import "./_openingInwestycje.scss";

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


// import PLAC1 from '../Assets/PLAC1.jpg';
// import PLAC2 from '../Assets/PLAC2.jpg';
// import PLAC3 from '../Assets/PLAC3.jpg';
// import PLAC4 from '../Assets/PLAC4.jpg';
// import PLAC5 from '../Assets/PLAC5.jpg';


// import BOISKO1 from '../Assets/BOISKO1.jpg';
// import BOISKO2 from '../Assets/BOISKO2.jpg';
// import BOISKO3 from '../Assets/BOISKO3.jpg';
// import BOISKO4 from '../Assets/BOISKO4.jpg';
// import BOISKO5 from '../Assets/BOISKO5.jpg';

const photoGroupsDziennik = {
    "Roboty ziemne": [BUDOWA1, BUDOWA2, BUDOWA3, BUDOWA4, BUDOWA5],
    "Budowa pierwszej kondygnacji": [DROGA1, DROGA2, DROGA3, DROGA4, DROGA5],
  };
  
  const photoGroupsCena = {
    "100": [BUDOWA1, BUDOWA2, BUDOWA3, BUDOWA4, BUDOWA5],
    "200": [DROGA1, DROGA2, DROGA3, DROGA4, DROGA5],
  };
  
  const photoGroupsOkolica = {
    "Okolica1": [BUDOWA1, BUDOWA2, BUDOWA3, BUDOWA4, BUDOWA5],
    "Okolica2": [DROGA1, DROGA2, DROGA3, DROGA4, DROGA5],
  };
  
  const photoGroupsBudownictwo = {
    "Budownictwo1": [BUDOWA1, BUDOWA2, BUDOWA3, BUDOWA4, BUDOWA5],
    "Budownictwo2": [DROGA1, DROGA2, DROGA3, DROGA4, DROGA5],
  };
  
  const photoGroupsDroga = {
    "Droga1": [BUDOWA1, BUDOWA2, BUDOWA3, BUDOWA4, BUDOWA5],
    "Droga2": [DROGA1, DROGA2, DROGA3, DROGA4, DROGA5],
  };

  const OpeningInwestycje = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [photoGroup, setPhotoGroup] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Dziennik'); // New state for category
  
    const dziennikRef = useRef(null);
    const cenaRef = useRef(null);
    const okolicaRef = useRef(null);
    const budownictwoRef = useRef(null);
    const drogaRef = useRef(null);

    const openViewer = (groupName, index) => {
        let selectedGroup;
        switch (selectedCategory) {
          case 'Dziennik':
            selectedGroup = photoGroupsDziennik;
            break;
          case 'Cena':
            selectedGroup = photoGroupsCena;
            break;
          case 'Okolica':
            selectedGroup = photoGroupsOkolica;
            break;
          case 'Budownictwo':
            selectedGroup = photoGroupsBudownictwo;
            break;
          case 'Droga':
            selectedGroup = photoGroupsDroga;
            break;
          default:
            selectedGroup = photoGroupsDziennik;
        }
        setPhotoGroup(selectedGroup[groupName]);
        setSelectedImage(selectedGroup[groupName][index]);
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

      const scrollToSection = (ref) => {
        if (ref && ref.current) {
          ref.current.scrollIntoView({ behavior: 'smooth' });
          const offset = 50; // 50px higher
          const elementPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      };

    return (
        <>
        <section className="openingInwestycje">
            <div className="openingInwestycje_container container">
                    <div className="ChoseOption">
                        <div className="ChoseOption_top">
                            Osiedle - Dębowa Aleja
                        </div>
                        <div className="ChoseOption_bottom">
                            <span className="ChoseOption_icon green dziennik" onClick={() => { setSelectedCategory('Dziennik'); scrollToSection(dziennikRef); }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
                                </svg>
                                <h1 className="ChoseOption_Text">Dziennik Budowy</h1>
                            </span>
                            <span className="ChoseOption_icon green cena" onClick={() => { setSelectedCategory('Cena'); scrollToSection(cenaRef); }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path d="M312 24l0 10.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3s0 0 0 0c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8l0 10.6c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-11.4c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2L264 24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z"/>
                                </svg>                                
                                <h1 className="ChoseOption_Text">Niska Cena</h1>
                            </span>
                            <span className="ChoseOption_icon green okolica" onClick={() => { setSelectedCategory('Okolica'); scrollToSection(okolicaRef); }}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                              </svg>                            
                                  <h1 className="ChoseOption_Text">Okolica</h1>
                            </span>
                            <span className="ChoseOption_icon green budownictwo" onClick={() => { setSelectedCategory('Budownictwo'); scrollToSection(budownictwoRef); }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c.2 35.5-28.5 64.3-64 64.3l-320.4 0c-35.3 0-64-28.7-64-64l0-160.4-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L416 100.7 416 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 121 52.8 46.4c8 7 12 15 11 24zM248 192c-13.3 0-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24l-80 0z"/>
                                </svg>
                                <h1 className="ChoseOption_Text">Nowoczesne Budownictwo</h1>
                            </span>
                            <span className="ChoseOption_icon green droga" onClick={() => { setSelectedCategory('Droga'); scrollToSection(drogaRef); }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
                                </svg>
                                <h1 className="ChoseOption_Text">Droga Dojazdowa</h1>
                            </span> 
                    </div>
                </div>
            </div>
        </section>

        <div className="photo-container container">
        <div ref={dziennikRef}>
          {Object.keys(photoGroupsDziennik).map((groupName) => (
            <div className="photo-group" key={groupName}>
              <h2>{groupName}</h2>
              <div className="photos">
                {photoGroupsDziennik[groupName].map((photo, index) => (
                  <img
                    src={photo}
                    alt={"zdjecia_dziennik"}
                    key={index}
                    className="photo"
                    onClick={() => openViewer(groupName, index)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={cenaRef}>
          {Object.keys(photoGroupsCena).map((groupName) => (
            <div className="photo-group" key={groupName}>
              <h2>{groupName}</h2>
              <div className="photos">
                {photoGroupsCena[groupName].map((photo, index) => (
                  <img
                    src={photo}
                    alt={"zdjecia_cena"}
                    key={index}
                    className="photo"
                    onClick={() => openViewer(groupName, index)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={okolicaRef}>
          {Object.keys(photoGroupsOkolica).map((groupName) => (
            <div className="photo-group" key={groupName}>
              <h2>{groupName}</h2>
              <div className="photos">
                {photoGroupsOkolica[groupName].map((photo, index) => (
                  <img
                    src={photo}
                    alt={"zdjecia_okolica"}
                    key={index}
                    className="photo"
                    onClick={() => openViewer(groupName, index)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={budownictwoRef}>
          {Object.keys(photoGroupsBudownictwo).map((groupName) => (
            <div className="photo-group" key={groupName}>
              <h2>{groupName}</h2>
              <div className="photos">
                {photoGroupsBudownictwo[groupName].map((photo, index) => (
                  <img
                    src={photo}
                    alt={"zdjecia_budownictwo"}
                    key={index}
                    className="photo"
                    onClick={() => openViewer(groupName, index)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={drogaRef}>
          {Object.keys(photoGroupsDroga).map((groupName) => (
            <div className="photo-group" key={groupName}>
              <h2>{groupName}</h2>
              <div className="photos">
                {photoGroupsDroga[groupName].map((photo, index) => (
                  <img
                    src={photo}
                    alt={"zdjecia_droga"}
                    key={index}
                    className="photo"
                    onClick={() => openViewer(groupName, index)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeViewer}>
          <button className="lightbox-close" onClick={closeViewer}>Close</button>
          <button className="lightbox-prev" onClick={prevImage}>Previous</button>
          <img src={selectedImage} alt="Selected" />
          <button className="lightbox-next" onClick={nextImage}>Next</button>
        </div>
      )}
    </>
  );
};

export default OpeningInwestycje;

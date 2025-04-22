import React, { useState } from 'react';
import './_openingInwestycje.scss';

import BUD1 from '../Assets/BUD1.jpg';
// import BUD2 from '../Assets/BUD2.jpg';
import BUD3 from '../Assets/BUD3.jpg';
import BUD4 from '../Assets/BUD4.jpg';
import BUD5 from '../Assets/BUD5.jpg';
import BUD6 from '../Assets/BUD6.jpg';
import BUD7 from '../Assets/BUD7.jpg';
import BUD8 from '../Assets/BUD8.jpg';
import BUD9 from '../Assets/BUD9.jpg';
import BUD10 from '../Assets/BUD10.jpg';
import BUD11 from '../Assets/BUD11.jpg';
import BUD12 from '../Assets/BUD12.jpg';
import BUD13 from '../Assets/BUD13.jpg';
import BUD14 from '../Assets/BUD14.jpg';
import BUD15 from '../Assets/BUD15.jpg';
import BUD16 from '../Assets/BUD16.jpg';
import BUD17 from '../Assets/BUD17.jpg';
import BUD18 from '../Assets/BUD18.jpg';
// import BUD19 from '../Assets/BUD19.jpg';
import BUD20 from '../Assets/BUD20.jpg';
import BUD21 from '../Assets/BUD21.jpg';
import BUD22 from '../Assets/BUD22.jpg';
// import BUD23 from '../Assets/BUD23.jpg';
import BUD24 from '../Assets/BUD24.jpg';
import BUD25 from '../Assets/BUD25.jpg';
import BUD26 from '../Assets/BUD26.jpg';

import BUD2_1 from '../Assets/BUD2 1.jpg';
import BUD2_2 from '../Assets/BUD2 2.jpg';
import BUD2_3 from '../Assets/BUD2 3.jpg';

import BUDa0 from "../Assets/BUDa0.jpg"
import BUDa1 from "../Assets/BUDa1.jpg"
import BUDa2 from "../Assets/BUDa2.jpg"

import CEN1 from '../Assets/CEN1.jpg';
import CEN2 from '../Assets/CEN2.jpg';
import CEN3 from '../Assets/CEN3.jpg';
import CEN4 from '../Assets/CEN4.jpg';
import CEN5 from '../Assets/CEN5.jpg';

import NOW1 from '../Assets/NOW1.jpg';
import NOW2 from '../Assets/NOW2.jpg';
import NOW3 from '../Assets/NOW3.jpg';
import NOW4 from '../Assets/NOW4.jpg';
import NOW5 from '../Assets/NOW5.jpg';
import NOW6 from '../Assets/NOW6.jpg';
import NOW7 from '../Assets/NOW7.jpg';
import NOW8 from '../Assets/WIZ1.png';
import NOW9 from '../Assets/WIZ2.png';
import NOW10 from '../Assets/WIZ3.jpg';


import DROGA1 from '../Assets/DROGA1.jpg';
import DROGA2 from '../Assets/DROGA2.jpg';
import DROGA3 from '../Assets/DROGA3.jpg';
import DROGA4 from '../Assets/DROGA4.jpg';
import DROGA5 from '../Assets/DROGA5.jpg';
import DROGA6 from '../Assets/DROGA6.jpg';
import DROGA7 from '../Assets/DROGA7.jpg';
import DROGA8 from '../Assets/DROGA8.jpg';
import DROGA9 from '../Assets/DROGA9.jpg';
import DROGA10 from '../Assets/DROGA10.jpg';

import GALERIA from '../Assets/GALERIAPARTNER.jpg'

import BOISKO1 from '../Assets/BOISKO1.jpg';
import BOISKO2 from '../Assets/BOISKO2.jpg';
import BOISKO3 from '../Assets/BOISKO3.jpg';
import BOISKO4 from '../Assets/BOISKO4.jpg';
import BOISKO5 from '../Assets/BOISKO5.jpg';

import PLAC1 from '../Assets/PLAC1.jpg';
import PLAC2 from '../Assets/PLAC2.jpg';
import PLAC3 from '../Assets/PLAC3.jpg';
import PLAC4 from '../Assets/PLAC4.jpg';

const descriptionGroups = [
  {
    id: 'DziennikBudowy',
    header: 'Dziennik Budowy',
    description: 'Zdjęcia poniżej przedstawiają kolejne etapy realizacji naszych domów. Postaramy się uaktualniać tę sekcję na bieżąco, aby odzwierciedlać postępy prac.',
    photos: [BUD1, BUD3, BUD4, BUD5, BUD6, BUD7, BUD8, BUD9, BUD10, BUD11, BUD12, BUD13, BUD14, BUD15, BUD16, 
      BUD17, BUD18, BUD20, BUD21, BUD22, BUDa0, BUD2_1, BUD2_2, BUD2_3, BUDa1, BUDa2, BUD24, BUD25, BUD26]
  },
  {
    id: 'Cena',
    header: 'Niska Cena',
    description:
    'Przede wszystkim jesteśmy małą, rzetelną firmą z bogatym doświadczeniem, dzięki czemu możemy zaoferować najlepszy stosunek jakości do ceny. Poniżej przedstawiamy kilka kluczowych elementów, które są zawarte w cenie domu: - Duża powierzchnia działki: od 500 m² do 580 m² - Nowoczesne ogrodzenie: pełny mur od frontu budynku wraz z ogrodzeniem z siatki wokół całej posesji (wkrótce wstawimy wizualizacje lub zdjęcia z realizacji) - Miejsce garażowe wewnątrz budynku oraz miejsce garażowe na zewnątrz budynku. Ponadto w przyszłości osiedle będzie posiadało osobny parking - Kompletny system rekuperacji: zapewniający efektywną wentylację i oszczędność energii - Nowoczesna pompa ciepła: gwarantująca efektywne ogrzewanie podłogowe, które równomiernie rozprowadza ciepło po całym domu, zapewniając komfort i oszczędność energii',
    photos: [CEN1, CEN2, CEN3, CEN4, CEN5]
  },
  {
    id: 'NowoczesneBudownictwo',
    header: 'Nowoczesne budownictwo',
    description: 'Nowoczesna stylistyka budynku to dopiero początek. Dzięki ponadprzeciętnym parametrom przenikalności cieplnej, w połączeniu z zaawansowanym systemem rekuperacji oraz pompą ciepła nasze domy spełniają wymagania budynków niskoenergetycznych. Dodatkowo oferujemy możliwość wykonania instalacji klimatyzacji oraz fotowoltaiki, aby zapewnić maksymalny komfort użytkowania. W standardzie każdy dom posiada również instalację przystosowaną do ładowarki dla samochodów elektrycznych.',
    photos: [NOW1, NOW2, NOW3, NOW4, NOW5, NOW6, NOW7, NOW8, NOW9, NOW10]
  },
  {
    id: 'Okolica',
    header: 'Okolica',
    description: 'Obok osiedla mamy nowy nowoczesny plac zabaw dla dzieci oraz duże boiska do gry w siatkówkę oraz piłkę nożną. Osiedle i centrum handlowe Mińska Mazowieckiego dzieli jedynie 1,5km odglegości. Na osiedlu powstanie plac zabaw oraz dodatkowe miejsce parkingowe. Wszystkie udogodnienia zostały przedstawione na mapie w dolnej części tej strony.',
    photos: [BOISKO1, BOISKO2, BOISKO3, BOISKO4, BOISKO5,PLAC1, PLAC2, PLAC3, PLAC4, GALERIA]
  },
  {
    id: 'DrogaDojazdowa',
    header: 'Droga Dojazdowa',
    description: 'Lokalizacja zapewnia świetny dojazd do Warszawy zarówno samochodowy jak i kolejowy. Poruszając się autem drogą ekspresową, możemy dotrzeć z naszego osiedla do stolicy nawet w 30 minut (Zaznaczony punkt docelowy to metro stacja Warszawa Ursynów). Transport kolejowy z Mińska Mazowieckiego/Wrzosowa do Warszawy zapewnia dojazd nawet w 30 minut (dojazd samochodem do stacji to dodatkowe 8minut). Ponadto drogi dojazdowe do osiedla są w bardzo dobrym stanie. Droga od Gminy Dębę Wielkie została wykonana w 2024 roku nastomiast droga do Mińska Mazowieckiego niedawno była modernizowana. W przyszłości całe osiedle będzie posiadało również dojazd od strony Arynowa. Wewnętrzna droga osiedla będzie miała szerokość 7 m, zapewniająć wygodną komunikację wewnątrz osiedla.',
    photos: [DROGA1, DROGA2, DROGA3, DROGA4, DROGA5, DROGA6, DROGA7, DROGA8, DROGA9, DROGA10],
  },
];

const PhotosRealizacje = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [photoGroup, setPhotoGroup] = useState([]);
  const [isFading, setIsFading] = useState(false);


  const yOffset = -150;

  const handleScrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
  };

  const openViewer = (photos, index) => {
    setPhotoGroup(photos);
    setSelectedImage(photos[index]);
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
    }, 500); 
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % photoGroup.length;
    handleImageTransition(newIndex);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photoGroup.length);
    setSelectedImage(photoGroup[(currentImageIndex + 1) % photoGroup.length]);
  };

  const prevImage = () => {
    const newIndex =
    (currentImageIndex - 1 + photoGroup.length) % photoGroup.length;
  handleImageTransition(newIndex);
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + photoGroup.length) % photoGroup.length);
    setSelectedImage(photoGroup[(currentImageIndex - 1 + photoGroup.length) % photoGroup.length]);
  };

  return (
    <>
    <div className="openingInwestycje_background">
        <section className="openingInwestycje">
                <div className="photosbox">
                  <h1 className="photosbox_opener container">OSIEDLE - DĘBOWA ALEJA</h1>
                  <h3 className="photosbox_text container">W tej sekcji przedstawiamy naszą najnowszą inwestycję, Osiedle - Dębowa Aleja, która łączy w sobie nowoczesne budownictwo, atrakcyjne ceny oraz komfort życia w spokojnej okolicy. Poniżej znajdziesz szczegółowe informacje o kluczowych aspektach tej wyjątkowej inwestycji, wraz ze zdjęciami, które obrazują każdy etap realizacji.</h3>
                </div>

                
                  <div className="openingInwestycje_container container">
                          <div className="ChoseOption">
                              <div className="ChoseOption_bottom">
                                  <span className="ChoseOption_icon green dziennik" onClick={() => { handleScrollToSection('DziennikBudowy'); }}>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                          <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
                                      </svg>
                                      <h1 className="ChoseOption_Text">Dziennik Budowy</h1>
                                  </span>
                                  <span className="ChoseOption_icon green cena" onClick={() => { handleScrollToSection('Cena'); }}>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path d="M312 24l0 10.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3s0 0 0 0c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8l0 10.6c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-11.4c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2L264 24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z"/>
                                      </svg>                                
                                      <h1 className="ChoseOption_Text">Niska Cena</h1>
                                  </span>
                                  <span className="ChoseOption_icon green budownictwo" onClick={() => { handleScrollToSection('NowoczesneBudownictwo'); }}>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c.2 35.5-28.5 64.3-64 64.3l-320.4 0c-35.3 0-64-28.7-64-64l0-160.4-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L416 100.7 416 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 121 52.8 46.4c8 7 12 15 11 24zM248 192c-13.3 0-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24l-80 0z"/>
                                      </svg>
                                      <h1 className="ChoseOption_Text">Nowoczesne Budownictwo</h1>
                                  </span>
                                  <span className="ChoseOption_icon green okolica" onClick={() => { handleScrollToSection('Okolica'); }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                  </svg>                            
                                      <h1 className="ChoseOption_Text">Okolica</h1>
                                  </span>
                                  <span className="ChoseOption_icon green droga" onClick={() => { handleScrollToSection('DrogaDojazdowa'); }}>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                          <path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
                                      </svg>
                                      <h1 className="ChoseOption_Text">Droga Dojazdowa</h1>
                                  </span> 
                          </div>
                      </div>
                  </div>
       
            </section>
    
            <div className="container">
            {descriptionGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="description-container">
                <div className="description-group">
                  <div className="photobox_inwerstycje">
                    <h2 className="photobox_inwerstycje_opener" id={group.id}>{group.header}</h2>
                    <p className="photobox_inwerstycje_text">{group.description}</p>
                  </div>
                    <div className="photo-container">
                    <div className="photos">
                        {group.photos.map((photo, index) => (
                        <img
                            key={index}
                            src={photo}
                            alt="Photo_realisation"
                            className="photo"
                            onClick={() => openViewer(group.photos, index)}
                        />
                        ))}
                    </div>
                    </div>
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


                <div
                  className={`image-wrapper ${isFading ? "fade" : ""}`}
                >
                  <img src={selectedImage} alt="Selected Realisation" />
                </div>
          

                <svg onClick={nextImage} id="rightArrow" className="arrow right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <g strokeLinejoin="round" strokeLinecap="round">
                    <circle r="46" cx="50" cy="50" />
                    <polyline points="40 25, 70 50, 40 75"></polyline>
                    </g>
                </svg>
                </div>
                
            )}
        </div>
      </div>
        
    </>
  );
};

export default PhotosRealizacje;
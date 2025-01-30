import React, {useState} from 'react';
import "./_carouselRealizacje.scss";

const CarouselRealizacje = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => {
        if (currentIndex < (3)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    return (
        <div className="carousel-container ">
            <div className="photosbox ">
                <h1 className="photosbox_opener container">Zapraszamy do galerii zdjęć naszych realizacji</h1>
                <h3 className="photosbox_text container">Poniżej znajdziesz galerię przedstawiającą wybrane realizacje, które wykonaliśmy w ramach naszych inwestycji. Każdy projekt to połączenie nowoczesnych rozwiązań architektonicznych z dbałością o najwyższą jakość wykonania. Nasze realizacje to nie tylko domy, ale także przestrzenie tworzone z myślą o komforcie i satysfakcji mieszkańców. Zobacz, jak wyglądają gotowe inwestycje – zarówno z zewnątrz, jak i wewnątrz – i przekonaj się o naszej solidności i profesjonalizmie.</h3>
            </div>


            <div className="carousel-wrapper">
            <svg onClick={prev} id="leftArrow" className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <g strokeLinejoin="round" strokeLinecap="round" >
                    <circle r="46" cx="50" cy="50" />
                    <polyline points="60 25, 30 50, 60 75" ></polyline>
                </g>
            </svg>
                <div className="carousel-content-wrapper">
                    <div className="carousel-content"
                         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        <section className="slide slide_realizacje_1">
                            <div className="slide_content">
                                <a href="/realizacje" className="slide_button button-option">Dom na Wilanowie</a>
                                <p className="slide_text">Realizacja budowy i wykończenia domu pod klucz na Wilanowie.</p>
                            </div>
                        </section>
                        <section className="slide slide_realizacje_2">
                            <div className="slide_content">
                                <a href="/realizacje" className="slide_button button-option">Dom w Lubominie</a>
                                <p className="slide_text"> Kompleksowe wykonanie budowy oraz wykończenia domu w Lubominie.</p>
                            </div>
                        </section>
                        <section className="slide slide_realizacje_3">
                            <div className="slide_content">
                                <a href="/realizacje" className="slide_button button-option">Domy na osiedlu Emilianów Leśny</a>
                                <p className="slide_text">Przebudowa budynków i wykończenie pod klucz na osiedlu Emilianów Leśny.</p>
                            </div>
                        </section>
                        <section className="slide slide_realizacje_4">
                            <div className="slide_content">
                                <a href="/realizacje" className="slide_button button-option">Kliniki Focus Clinic w Warszawie i Mińsku Mazowieckim</a>
                                <p className="slide_text"> Między innymi w Warszawie na ul. Niekłańska 41 oraz w Mińsku Mazowieckim na ul. Warszawskiej 141 i Konstytucji 3 Maja.</p>
                            </div>
                        </section>

                    </div>
                </div>
                    <svg onClick={next} id="rightArrow" className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                        <g strokeLinejoin="round" strokeLinecap="round" >
                            <circle r="46" cx="50" cy="50" />
                            <polyline points="40 25, 70 50, 40 75" ></polyline>
                        </g>
                 </svg>
            </div>
            

        </div>
    );
};

export default CarouselRealizacje;



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
            <div className="carousel-wrapper">
            <svg onClick={prev} id="leftArrow" class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <g stroke-linejoin="round" stroke-linecap="round" >
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
                                <a href="/Chorwacja" className="slide_button button-option">Kliniki Focus Clinic w Warszawie i Mińsku Mazowieckim</a>
                                <p className="slide_text">Kompleksowe remonty i wykończenie w klinikach Focus Clinic. Między innymi w Warszawie na ul. Niekłańska 41 oraz w Mińsku Mazowieckim na ul. Warszawskiej 141 i Konstytucji 3 Maja.</p>
                            </div>
                        </section>
                        <section className="slide slide_realizacje_2">
                            <div className="slide_content">
                                <a href="" className="slide_button button-option">Aparatamenty w prestiżowym wieżowcu Złota 44</a>
                                <p className="slide_text">Wykończenie pod klucz mieszkań w wieżowcu Złota 44 w centrum Warszawy.</p>
                            </div>
                        </section>
                        <section className="slide slide_realizacje_3">
                            <div className="slide_content">
                                <a href="" className="slide_button button-option">Osiedle domów wolnostojących na prestiżowym osiedlu w Emilanowie Leśnym</a>
                                <p className="slide_text">Wykonanie stanu developerskiego domów na prestiżowym osiedlu w Emilianowie w Józefowie pod Warszawą</p>
                            </div>
                        </section>
                        <section className="slide slide_realizacje_4">
                            <div className="slide_content">
                                <a href="" className="slide_button button-option">Osiedle domów w Kołobrzegu</a>
                                <p className="slide_text">Kompleksowa budowa domów wraz z wykończeniem pod klucz w Kołobrzegu.</p>
                            </div>
                        </section>
                    </div>
                </div>
                    <svg onClick={next} id="rightArrow" class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                        <g stroke-linejoin="round" stroke-linecap="round" >
                            <circle r="46" cx="50" cy="50" />
                            <polyline points="40 25, 70 50, 40 75" ></polyline>
                        </g>
                 </svg>
            </div>
            

        </div>
    );
};

export default CarouselRealizacje;



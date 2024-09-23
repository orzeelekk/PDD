import React, {useState} from 'react';
import "./_carousel.scss";


const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => {
        if (currentIndex < (2)) {
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
                        <section className="slide slide_1">
                            <div className="slide_content">
                                <a href="/Inwestycje" className="slide_button button-option">Osiedle - Dębowa Aleja</a>
                                <p className="slide_text">Inwestycja w Mińsku Mazowieckim w trakcie realizacji. Celem przedsięwzięcia jest wykonanie domów wolnostojących w cenie mieszkania.</p>
                            </div>
                        </section>
                        <section className="slide slide_2">
                            <div className="slide_content">
                            <a href="/Inwestycje" className="slide_button button-option">Osiedle - Dębowa Aleja</a>
                                <p className="slide_text">Inwestycja w Mińsku Mazowieckim w trakcie realizacji. Celem przedsięwzięcia jest wykonanie domów wolnostojących w cenie mieszkania.</p>
                            </div>
                        </section>
                        <section className="slide slide_3">
                            <div className="slide_content">
                            <a href="/Inwestycje" className="slide_button button-option">Osiedle - Dębowa Aleja</a>
                                <p className="slide_text">Inwestycja w Mińsku Mazowieckim w trakcie realizacji. Celem przedsięwzięcia jest wykonanie domów wolnostojących w cenie mieszkania.</p>
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

export default Carousel;



import React, {useState, useEffect} from 'react';
import "./_carousel.scss";


const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = 5;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % totalSlides);
        }, 5000); 

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const next = () => {
        setCurrentIndex(prev => (prev + 1) % totalSlides);
    };

    const prev = () => {
        setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="carousel-container ">
            <div className="carousel-wrapper">
            <svg onClick={prev} id="leftArrow" className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <g strokeLinejoin="round" strokeLinecap="round" >
                    <circle r="46" cx="50" cy="50" />
                    <polyline points="60 25, 30 50, 60 75" ></polyline>
                </g>
            </svg>
            <div className="carousel-content-wrapper">
  <div className="carousel-content">
    {[1, 2, 3, 4, 5].map((num, index) => (
      <section
        key={num}
        className={`slide slide_${num} ${currentIndex === index ? 'active' : 'inactive'}`}
      >
        <div className="slide_content">
          <a href="/Inwestycje" className="slide_button button-option">Osiedle - Dębowa Aleja</a>
          <p className="slide_text">
            Aktualna inwestycja w Mińsku Mazowieckim w trakcie realizacji.
            Celem przedsięwzięcia jest wykonanie domów wolnostojących w cenie mieszkania.<br/><br/>
            Szczegóły w zakładce INWESTYCJE.
          </p>
        </div>
      </section>
    ))}
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

export default Carousel;



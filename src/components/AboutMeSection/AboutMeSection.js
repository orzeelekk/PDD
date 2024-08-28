import React from 'react';
import "./_aboutMeSection.scss";
import "./_form.scss";
import { daneTechniczne } from "./daneTechniczne";
import DaneTechniczne from "./DaneTechniczne";
import Form from "./Form";

const AboutMeSection = () => {

    return (
        <>
        <section className="aboutme container">
        <div className="box aboutme_info">
                    <h1 className="opening_header">Wybierz swój segment:</h1>
                    <p className="opening_text">
                        o - Dostępne <br/>
                        @ - Rezerwacja <br/>
                        X - Sprzedane
                    </p>
                    <h1 className="opening_header">Ogólne parametry domów:</h1>
                    <p className="opening_text">
                        Powierzchnia zabudowy - 123m2 <br/>
                        Powierzchnia działki - 321m2 <br/>
                        Powierzchnia przeszklenia - 321m2 <br/>
    
                    </p>
                </div>
            <div className="aboutme_container">
     
            </div>
        
            <div className="motoinfoo container">
                    <h1 className="opening_header">Szczegółowa specyfikacja poszczególnych domów:</h1>
                    <div className="motoinfo_box">
                        {daneTechniczne.map((menu, index) => {
                            return <DaneTechniczne items={menu} key={index} />;
                        })}
                    </div>
                    <Form/>
            </div>
            
            
        </section>
  
   
        </>
    );
};

export default AboutMeSection;


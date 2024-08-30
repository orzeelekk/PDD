import React from 'react';
import "./_aboutMeSection.scss";
import { daneTechniczne } from "./daneTechniczne";
import SpecDomki from "./SpecDomki";

const AboutMeSection = () => {

    return (
        <>
        <section className="aboutme">
            <div className="aboutme_container container">
                <div class="ChoseHouse">
                    <div class="ChoseHouse_top">
                        Wybierz swój segment 
                    </div>
                    <div class="ChoseHouse_bottom">
                        <a href="" class="house_icon green">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                <path d="M32 12L4 36h8v24h16V44h8v16h16V36h8L32 12z"/>
                            </svg>
                            <h1>Dostępne</h1>
                        </a>
                        <a href="" class="house_icon yellow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                <path d="M32 12L4 36h8v24h16V44h8v16h16V36h8L32 12z"/>
                            </svg>
                            <h1>Rezerwacja</h1>
                        </a>
                        <a href="" class="house_icon red">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                <path d="M32 12L4 36h8v24h16V44h8v16h16V36h8L32 12z"/>
                            </svg>
                            <h1>Sprzedane</h1>
                        </a>
                </div>
        </div>
                
            </div>
    
                <div className="houseplan">
                    <h1>Domek - 1</h1>
                </div>
            
                <div className="houseinfo container">
                        <h1 className="houseinfo_header">Szczegółowa specyfikacja poszczególnych domów</h1>
                        <div className="houseinfo_box">
                            {daneTechniczne.map((menu, index) => {
                                return <SpecDomki items={menu} key={index} />;
                            })}
                        </div>
                </div>
        </section>
  
        </>
    );
};

export default AboutMeSection;


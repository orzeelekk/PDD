import React from 'react';
import Header from "../Header";
import Opening from "../Opening";
import Carousel from "../Carousel";
import Sectionto from "../Sectionto";
import Footer from "../Footer";
import AboutMeSection from "../AboutMeSection";
import MapSection from "../MapSection";



const Home = () => {
    return (
        <div className="App">
            <Header/>
            <Carousel/>
            <Opening/>
            <Sectionto/>
            <AboutMeSection/>
            <MapSection/>

            <Footer/>
        </div>
    );
};

export default Home;
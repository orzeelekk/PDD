import React from 'react';
import Header from "../Header";
import Opening from "../Opening";
import Carousel from "../Carousel";
import Sectionto from "../Sectionto";
import Footer from "../Footer";
import Wybierz from "../Wybierz";
import MapSection from "../MapSection";
import Form from "../Form";



const Home = () => {
    return (
        <div className="App">
            <Header/>
            <Carousel/>
            <Opening/>
            <Sectionto/>
            <Wybierz/>
            <MapSection/>  
            <Form/>
            <Footer/>
        </div>
    );
};

export default Home;
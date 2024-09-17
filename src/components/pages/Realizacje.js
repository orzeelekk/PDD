import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import PhotosRealizacje from "../PhotosRealizacje"
import CarouselRealizacje from "../CarouselRealizacje";

const Realizacje = () => {
    return (
        <div>
            <Header/>
            <CarouselRealizacje/>
            <PhotosRealizacje/>
            <Footer/>
        </div>
    );
};

export default Realizacje;
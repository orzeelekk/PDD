import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import PhotosRealisation from "../PhotosRealisation";
import MapSection from "../MapSection"


const AboutMe = () => {
    return (
        <div>
            <Header/>
            <PhotosRealisation/>
            <MapSection/>
            <Footer/>
        </div>
    );
};

export default AboutMe;
import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import MapSectionOsiedle from "../MapSectionOsiedle";
import OpeningInwestycje from "../OpeningInwestycje"


const Inwestycje = () => {
    return (
        <div>
            <Header/>
            <OpeningInwestycje/>
            <MapSectionOsiedle/>
            <Footer/>
        </div>
    );
};

export default Inwestycje;
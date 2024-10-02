import React from 'react';
import "./_mapSectionOsiedle.scss";

const MapSectionOsiedle = () => {
    return (
        <>
        <iframe 
        className="mapSection" 
        title="Map of Osiedle Location"
        referrerPolicy="no-referrer-when-downgrade"
        loading="lazy" 
        src="https://www.google.com/maps/d/u/0/embed?mid=11QPM_RMkdMD_HWjZgnsJxji1pCY6e-g&ehbc=2E312F&noprof=1"></iframe>        </>
    );
};

export default MapSectionOsiedle;





import React from 'react';
import "./_mapSection.scss";

const MapSection = () => {
    return (
        <>
            {/* <section className="map">
                <div className="map_container container">
                    <div className="box map_info">
                        <ul className="map_list">
                            <h1 className="map_header">Mapka ciekawych miejsc z okolic:</h1>
                            <li>Warszawy</li>
                            <li>Lublina</li>
                            <li>Mazur</li>
                            <li>oraz punktow odwiedzonych na dłuższych trasach</li>
                            <p>Mapa jest na bieżąco aktualizowana. <br/>
                                Jeżeli macie jakieś ciekawe miejsca do podesłania prosze o kontakt na maila <a className="email" href="mailto:EMAILADDRESS">MotoBlog</a>.
                            </p>
                        </ul>
                    </div>
                </div>
            </section> */}
            <iframe className="mapSection" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5283.348580593607!2d21.517320337456404!3d52.19508440683687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471f2eae71f60f29%3A0x7551dd4a4619f7ec!2sWarszawska%2010%2C%2005-300%20Choszcz%C3%B3wka%20Stojecka!5e0!3m2!1spl!2spl!4v1726145076547!5m2!1spl!2spl"></iframe>
        </>
    );
};

export default MapSection;





import React, {useEffect} from 'react';
import "./_sectionto.scss";

const Sectionto = () => {
    return (
        <>
            <section className="sectionto container">
                <h1 className="sectionto_h1 opening_header">Co nas wyróżnia?</h1>
                    <div className="sectionto_elements">
                        <div className="button-to sectionto_1">
                            <a href="Trip" className="button-to_text">Lokalizacja</a>
                            <h3 className="sectionto_description">
                            Osiedle oferuje doskonały dojazd zarówno<br/>
                            do Warszawy, jak i Mińska Mazowieckiego. <br/>
                            Nazwa osiedla nie jest przypadkowa <br/>
                            – znajduje się ono w zacisznej części Mińska, <br/>
                            otoczone licznymi drzewami, w tym dębami.
                            </h3>
                        </div>
                        <div className="button-to sectionto_2">
                            <a href="Map" className="button-to_text">Zabudowa wolnostojąca</a>
                            <h3 className="sectionto_description">
                            W przeciwieństwie do konkurencji, <br/>
                            jako jedni z niewielu budujemy domy<br/>
                            w zabudowie wolnostojącej.<br/>
                            Ponadto każdy domek posiada dodatkowe <br/>
                            zewnętrzne miejsce parkingowe.
                            </h3>
                        </div>
                        <div className="button-to sectionto_3"><
                            a className="button-to_text">Nowoczesne budownictwo</a>
                            <h3 className="sectionto_description">
                            Poza nowoczesnym designem domki są <br/>
                            wyposażone w pompę ciepła i system rekuperacji. <br/>
                            Dzięki tym rozwiązaniom możesz cieszyć się<br/>
                            niższymi rachunkami za energię.
                            </h3>
                        </div>
                        <div className="button-to sectionto_4">
                            <a className="button-to_text">Niska cena</a>
                            <h3 className="sectionto_description">
                            Naszym głównym celem jest budowa<br/>
                            domów w cenie mieszkania w centrum. <br/>
                            Ceny mieszkań wahają się między<br/>
                            800tys. zł a 900 tys. zł.
                            </h3>
                        </div>
                    </div>
            </section>
        </>
    );
};

export default Sectionto;
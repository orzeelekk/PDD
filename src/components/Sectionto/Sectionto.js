import React from 'react';
import "./_sectionto.scss";

const Sectionto = () => {
    return (
        <>
            <section className="sectionto container">
                <h1 className="sectionto_h1 opening_header">Co nas wyróżnia?</h1>
                <div className="sectionto_elements">
                    {/* Element 1 */}
                    <div className="button-to sectionto_1">
                        <a 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            href="https://maps.app.goo.gl/yCMyntkBxhTtviXX8" 
                            className="button-to_text"
                        >
                            Lokalizacja
                        </a>
                        <h3 className="sectionto_description">
                            Osiedle oferuje doskonały dojazd zarówno<br />
                            do Warszawy, jak i Mińska Mazowieckiego.<br />
                            Nazwa osiedla nie jest przypadkowa<br />
                            – znajduje się ono w zacisznej części Mińska,<br />
                            otoczone licznymi drzewami, w tym dębami.
                        </h3>
                    </div>

                    {/* Element 2 */}
                    <div className="button-to sectionto_2">
                        <a href="/Inwestycje" className="button-to_text">
                            Zabudowa wolnostojąca
                        </a>
                        <h3 className="sectionto_description">
                            W przeciwieństwie do konkurencji,<br />
                            jako jedni z niewielu budujemy domy<br />
                            w zabudowie wolnostojącej.<br />
                            Ponadto każdy domek posiada dodatkowe<br />
                            zewnętrzne miejsce parkingowe.
                        </h3>
                    </div>

                    {/* Element 3 */}
                    <div className="button-to sectionto_3">
                        <a href="/Inwestycje" className="button-to_text">
                            Nowoczesne budownictwo
                        </a>
                        <h3 className="sectionto_description">
                            Poza nowoczesnym designem domki są<br />
                            wyposażone w pompę ciepła i system rekuperacji.<br />
                            Dzięki tym rozwiązaniom możesz cieszyć się<br />
                            niższymi rachunkami za energię.
                        </h3>
                    </div>

                    {/* Element 4 */}
                    <div className="button-to sectionto_4">
                        <a href="/Inwestycje" className="button-to_text">
                            Niska cena
                        </a>
                        <h3 className="sectionto_description">
                            Naszym głównym celem jest budowa<br />
                            domów w cenie mieszkania w centrum.<br />
                            Ceny mieszkań wahają się między<br />
                            800 tys. zł a 900 tys. zł.
                        </h3>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sectionto;

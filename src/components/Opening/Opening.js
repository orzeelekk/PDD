import React from 'react';
import "./_opening.scss";


const Opening = () => {

    return (
        <>
            <section className="opening" id="opening">
                <div className="opening_container container">
                    <div className="opening_left">
                        <h1 className="opening_header">Szukasz solidnego partnera do realizacji inwestycji budowlanej?</h1>
                        <h3 className="opening_text">
                        Jesteśmy firmą budowlaną z wieloletnim doświadczeniem, specjalizującą się w kompleksowej obsłudze inwestycji budowlanych.<br/>
                        W naszym portfolio znajdują się realizacje takie jak wykończenie pod klucz prestiżowych mieszkań na Złotej 44 w centrum Warszawy, wykonanie stanu deweloperskiego na osiedlu Ejsmonda w Józefowie oraz wiele innych.<br/>
                        Naszą główną specjalizacją jest jednak budowa domów wolnostojących. Obecnie realizujemy osiedle w Choszczówce Stojeckiej w Gminie Dębe Wielkie.<br/>
                        </h3>
                        <h1 className="opening_header">
                            Jak pracujemy?
                        </h1>
                        <h3 className="opening_text">
                        Pracujemy rzetelnie, dokładnie i terminowo. Naszą firmę cechuje dbałość o najmniejsze szczegóły, potrafimy zadowolić nawet najbardziej wymagających klientów.
                        Pracownicy przykładają wagę do wypełniania swoich obowiązków, dlatego też możemy pochwalić się takimi prestiżowymi projektami. Budujemy od zera, remontujemy od podstaw!
                        </h3>
                        <a href="/Realizacje" className="button-AboutMe button-option">Galeria zdjec naszych realizacji</a>
                    </div>
                    <div className="opening_right">
                        <div style={{

                        }} className="opening_photo ktm">
                            
                        </div>
                        <div style={{

                        }}  className="opening_photo bmw"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Opening;


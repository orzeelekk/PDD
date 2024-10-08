import React from 'react';
import "./_opening.scss";


const Opening = () => {

    return (
        <>
            <section className="opening" id="opening">
                <div className="opening_container container">
                    <div className="opening_left">
                        <h1 className="opening_header">Szukasz rzetelnego realizatora inwestycji budowlanej?</h1>
                        <h3 className="opening_text">
                            Jesteśmy działającą od wielu lat firma budowlaną zajmujacą sie profesjonalną obsługą inwestycji budowlanych.<br/>
                            W swoim portfolio mamy takie inwestrycje jak wykończenie pod klucz prestiżowych mieszkań na Złotej 44 w centrum Warszawy czy wykonanie stanu developerskiego na osiedlu Ejsmonda w Józefowie oraz wiele innych.<br/>
                            Jednak naszym głównym przedsięwzięciem jest budowa domów wolnostojących. Aktualnie wykonujemy osiedle w Choszcówce Stojeckiego w Giminie Dębe Wielkie.<br/>
                        </h3>
                        <h1 className="opening_header">
                            Jak pracujemy?
                        </h1>
                        <h3 className="opening_text">
                        Pracujemy rzetelnie, dokładnie i terminowo. Naszą firmę cechuje dbałość o najmniejsze szczegóły, potrafimy zadowolić nawet najbardziej wymagających klientów.
                        Pracownicy przykładają wagę do wypełniania swoich obowiązków, dlatego też możemy pochwalić się takimi prestiżowymi projektami. Budujemy od zera, remontujemy od podstaw!
                        </h3>
                        <a href="/Realizacje" className="button-AboutMe button-option">Galeria zdjec</a>
                    </div>
                    <div className="opening_right">
                        <div style={{

                        }} className="opening_photo ktm"></div>
                        <div style={{

                        }}  className="opening_photo bmw"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Opening;


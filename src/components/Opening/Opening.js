import React, {useState} from 'react';
import "./_opening.scss";


const Opening = () => {

    return (
        <>
            <section className="opening">
                <div className="opening_container container">
                    <div className="opening_left">
                        <h1 className="opening_header">Szukasz rzetelnego realizatora inwestycji budowlanej?</h1>
                        <h3 className="opening_text">
                            Jestesmy dzialajaca od wielu lat firma budowlaną zajmujaca sie profesjonalna obsluga inwestycji budowlanych.<br/>
                            W swoim portfolio mamy takie inwestrycje jak wykończenie pod klucz prestiżowych mieszkań z Złotej 44 w Warszawie czy wykonanie stanu developerskiego na osiedlu Ejsmonda w Józefowie oraz wiele innych.<br/>
                            Jednak naszym głównym przedsięwzięciem jest budowa domów wolnostojących. Aktualnie wykonujemy osiedle w Choszcówce Stojeckiego w Giminie Dębe Wielkie.<br/>
                        </h3>
                        <h1 className="opening_header">
                            Jak pracujemy?
                        </h1>
                        <h3 className="opening_text">
                        Pracujemy rzetelnie, dokładnie i w stu procentach terminowo. Naszą firmę cechuje dbałość o najmniejszy szczegół, potrafimy zadowolić nawet najbardziej wymagających Inwestorów.
                        Pracownicy przykładają wagę do wypełniania swoich obowiązków na najwyższym poziomie, dlatego też możemy pochwalić się takimi projektami jak wykończenia prestiżowych apartamentów. Budujemy od zera, remontujemy od podstaw!
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


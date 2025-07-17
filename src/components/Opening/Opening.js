import React from 'react';
import { useLanguage } from '../LanguageContext'; // Adjust path if needed
import "./_opening.scss";

const Opening = () => {
  const { language } = useLanguage();

  // Translation texts for each language
  const texts = {
    en: {
      header1: "Looking for a reliable partner to carry out your construction investment?",
      paragraph1: `We are a construction company with many years of experience, specializing in comprehensive construction investment services.
Our portfolio includes turnkey finishing of prestigious apartments at Złota 44 in the center of Warsaw, developer stage construction at the Ejsmonda estate in Józefów, and many others.
Our main specialty is the construction of detached houses. Currently, we are implementing an estate in Choszczówka Stojecka in the Dębe Wielkie Commune.`,
      header2: "How do we work?",
      paragraph2: `We work reliably, thoroughly, and on time. Our company is characterized by attention to the smallest details and we can satisfy even the most demanding clients.
Employees pay attention to fulfilling their duties, which is why we can boast such prestigious projects. We build from scratch, renovate from the ground up!`,
      galleryButton: "Gallery of our project photos",
    },
    pl: {
      header1: "Szukasz solidnego partnera do realizacji inwestycji budowlanej?",
      paragraph1: `Jesteśmy firmą budowlaną z wieloletnim doświadczeniem, specjalizującą się w kompleksowej obsłudze inwestycji budowlanych.
W naszym portfolio znajdują się realizacje takie jak wykończenie pod klucz prestiżowych mieszkań na Złotej 44 w centrum Warszawy, wykonanie stanu deweloperskiego na osiedlu Ejsmonda w Józefowie oraz wiele innych.
Naszą główną specjalizacją jest jednak budowa domów wolnostojących. Obecnie realizujemy osiedle w Choszczówce Stojeckiej w Gminie Dębe Wielkie.`,
      header2: "Jak pracujemy?",
      paragraph2: `Pracujemy rzetelnie, dokładnie i terminowo. Naszą firmę cechuje dbałość o najmniejsze szczegóły, potrafimy zadowolić nawet najbardziej wymagających klientów.
Pracownicy przykładają wagę do wypełniania swoich obowiązków, dlatego też możemy pochwalić się takimi prestiżowymi projektami. Budujemy od zera, remontujemy od podstaw!`,
      galleryButton: "Galeria zdjęć naszych realizacji",
    },
  };

  const t = texts[language];

  return (
    <>
      <section className="opening" id="opening">
        <div className="opening_container container">
          <div className="opening_left">
            <h1 className="opening_header">{t.header1}</h1>
            <h3 className="opening_text" style={{ whiteSpace: 'pre-line' }}>
              {t.paragraph1}
            </h3>
            <h1 className="opening_header">{t.header2}</h1>
            <h3 className="opening_text" style={{ whiteSpace: 'pre-line' }}>
              {t.paragraph2}
            </h3>
            <a href="/Realizacje" className="button-AboutMe button-option">{t.galleryButton}</a>
          </div>
          <div className="opening_right">
            <div className="opening_photo realizacje1"></div>
            <div className="opening_photo realizacje2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Opening;

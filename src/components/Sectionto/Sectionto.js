import React from 'react';
import { useLanguage } from '../LanguageContext'; // adjust path if needed
import "./_sectionto.scss";

const Sectionto = () => {
  const { language } = useLanguage();

  const texts = {
    en: {
      header: "Below is a brief section describing our current investment.",
      elements: [
        {
          linkText: "Location",
          linkHref: "https://maps.app.goo.gl/yCMyntkBxhTtviXX8",
          description: `The estate offers excellent access to both
Warsaw and Mińsk Mazowiecki.
The estate's name is no accident
– it is located in a quiet part of Mińsk,
surrounded by many trees, including oaks.`,
        },
        {
          linkText: "Detached buildings",
          linkHref: "/Inwestycje",
          description: `Unlike competitors,
we are among the few building detached houses.
Additionally, each house has an extra
outdoor parking space.`,
        },
        {
          linkText: "Modern construction",
          linkHref: "/Inwestycje",
          description: `Besides modern design, the houses are
equipped with a heat pump
and a recuperation system. They also have
the option to install air conditioning and photovoltaics.
Thanks to these solutions, you can enjoy
lower energy bills.`,
        },
        {
          linkText: "Low price",
          linkHref: "/Inwestycje",
          description: `Our main goal is to build houses
at the price of an apartment in the city center.
House prices range between
830,000 PLN and 930,000 PLN.`,
        },
      ],
      footerLink: 'Details in the "INVESTMENTS" tab',
    },
    pl: {
      header: "Poniżej znajduje się krótka sekcja z opisem naszej aktualnej inwestycji.",
      elements: [
        {
          linkText: "Lokalizacja",
          linkHref: "https://maps.app.goo.gl/yCMyntkBxhTtviXX8",
          description: `Osiedle oferuje doskonały dojazd zarówno
do Warszawy, jak i Mińska Mazowieckiego.
Nazwa osiedla nie jest przypadkowa
– znajduje się ono w zacisznej części Mińska,
otoczone licznymi drzewami, w tym dębami.`,
        },
        {
          linkText: "Zabudowa wolnostojąca",
          linkHref: "/Inwestycje",
          description: `W przeciwieństwie do konkurencji,
jako jedni z niewielu budujemy domy
w zabudowie wolnostojącej.
Ponadto każdy domek posiada dodatkowe
zewnętrzne miejsce parkingowe.`,
        },
        {
          linkText: "Nowoczesne budownictwo",
          linkHref: "/Inwestycje",
          description: `Poza nowoczesnym designem domy są
wyposażone w pompę ciepła
i system rekuperacji. Domy posiadają również
możliwość instalacji klimatyzacji i fotowoltaiki.
Dzięki tym rozwiązaniom możesz cieszyć się
niższymi rachunkami za energię.`,
        },
        {
          linkText: "Niska cena",
          linkHref: "/Inwestycje",
          description: `Naszym głównym celem jest budowa domów
w cenie mieszkania w centrum miasta.
Ceny domów wahają się między
830 tys. zł a 930 tys. zł.`,
        },
      ],
      footerLink: 'Szczgóły w zakładce "INWESTYCJE"',
    },
  };

  const t = texts[language];

  return (
    <>
      <section className="sectionto container">
        <h1 className="sectionto_header opening_header">{t.header}</h1>
        <div className="sectionto_elements">
          {t.elements.map((el, idx) => (
            <div key={idx} className={`button-to sectionto_${idx + 1}`}>
              <a
                target={el.linkHref.startsWith('http') ? "_blank" : undefined}
                rel={el.linkHref.startsWith('http') ? "noopener noreferrer" : undefined}
                href={el.linkHref}
                className="button-to_text"
              >
                {el.linkText}
              </a>
              <h3 className="sectionto_description" style={{ whiteSpace: 'pre-line' }}>
                {el.description}
              </h3>
            </div>
          ))}
        </div>
        <a href="/Inwestycje" className="button-AboutMe button-option">{t.footerLink}</a>
      </section>
    </>
  );
};

export default Sectionto;

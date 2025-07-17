import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "./_form.scss";
import { useLanguage } from '../LanguageContext'; // ✅ language context

const textContent = {
  pl: {
    title: "Pytania?",
    instruction: "Wyślij wiadomość lub zadzwoń.",
    name: "Imię",
    email: "E-mail",
    message: "Wiadomość",
    consent: "Wyrażam zgodę na przetwarzanie moich danych osobowych przez spółkę Polskie Domy Development sp. z o. o. zgodnie z Polityką prywatności.",
    send: "Wyślij",
    sending: "Wysyłanie formularza...",
    success: "Wiadomość wysłana.",
    failure: "Błąd wysyłania wiadomości.",
    validation: {
      name: "Imię musi być dłuższe niż 2 znaki!",
      email: "Mail musi być dłuższy niż 5 znaków!",
      message: "Wiadomość musi być dłuższa niż 10 znaków!",
      consent: "Musisz wyrazić zgodę na przetwarzanie danych osobowych!"
    },
    contactPhone: "Kontakt telefoniczny",
    contactMail: "Kontakt mailowy",
    office: "Adres biura sprzedaży"
  },
  en: {
    title: "Questions?",
    instruction: "Send a message or call us.",
    name: "Name",
    email: "Email",
    message: "Message",
    consent: "I agree to the processing of my personal data by Polskie Domy Development sp. z o. o. in accordance with the Privacy Policy.",
    send: "Send",
    sending: "Sending form...",
    success: "Message sent.",
    failure: "Error sending message.",
    validation: {
      name: "Name must be longer than 2 characters!",
      email: "Email must be longer than 5 characters!",
      message: "Message must be longer than 10 characters!",
      consent: "You must give consent to data processing!"
    },
    contactPhone: "Phone contact",
    contactMail: "Email contact",
    office: "Sales office address"
  }
};

function Form() {
  const { language } = useLanguage();
  const texts = textContent[language] || textContent.pl;

  const [data, setData] = useState({ Imie: '', Mail: '', Wiadomosc: "" });
  const [errors, setErrors] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setConsent(e.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    const validationErrors = [];
    if (data.Imie.length < 3) validationErrors.push(texts.validation.name);
    if (data.Mail.length < 6) validationErrors.push(texts.validation.email);
    if (data.Wiadomosc.length < 11) validationErrors.push(texts.validation.message);
    if (!consent) validationErrors.push(texts.validation.consent);

    setErrors(validationErrors);
    if (validationErrors.length > 0) {
      setSubmitting(false);
      return;
    }

    const templateParams = {
      from_name: data.Imie,
      from_email: data.Mail,
      message: data.Wiadomosc
    };

    emailjs.send('service_8a162mc', 'template_avwz6hg', templateParams, '589iS1PHT8R56Hmd4')
      .then(() => {
        setSubmitting(false);
        alert(texts.success);
        setData({ Imie: '', Mail: '', Wiadomosc: "" });
        setConsent(false);
      }, () => {
        setSubmitting(false);
        alert(texts.failure);
      });
  };

  return (
    <section className="contact container" id="contact">
      <div className="contact_column">
        <h2 className="contact_title">{texts.title}</h2>
        <p className="contact_instruction">{texts.instruction}</p>
        <div className="contact_details">
          <div className="details_info_left">
            <div className="details_item">
                 <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72 13.28 13.28 0 0 0 .57 2.79 2 2 0 0 1-.45 2L8.1 10.11a16 16 0 0 0 6.9 6.9l.58-.58a2 2 0 0 1 2-.45 13.28 13.28 0 0 0 2.79.57 2 2 0 0 1 1.72 2.11z" />
                </svg>
              <span className="details_info">{texts.contactPhone}: +48 518 330 003, +48 662 234 792</span>
            </div>
            <div className="details_item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16v16H4z" />
                    <path d="M22 6l-10 7L2 6" />
                    </svg>
              <span className="details_info">{texts.contactMail}: p.orzel@pdd.info.pl</span>
            </div>
            <div className="details_item">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
                </svg>
              <span className="details_info">{texts.office}: Mińsk Mazowiecki, Warszawska 66/7, 05-300</span>
            </div>
          </div>
        </div>
        {submitting && <div className="form_pop">{texts.sending}</div>}
      </div>

      <div className="contact_column">
        <form onSubmit={handleSubmit} className="form">
          <div className="form_field">
            <label htmlFor="name">{texts.name}</label>
            <input type="text" name="Imie" value={data.Imie} onChange={handleChange} id="name" className="form_input" />
          </div>
          <div className="form_field">
            <label htmlFor="email">{texts.email}</label>
            <input type="email" name="Mail" value={data.Mail} onChange={handleChange} id="email" className="form_input" />
          </div>
          <div className="form_field">
            <label htmlFor="message">{texts.message}</label>
            <textarea name="Wiadomosc" value={data.Wiadomosc} onChange={handleChange} id="message" className="form_input"></textarea>
          </div>
          <div className="form_consent">
            <label className="form_checkbox">
              <input type="checkbox" id="consentCheckbox" checked={consent} onChange={handleCheckboxChange} />
              <span className="checkbox"></span>
              <p className="consent_text">{texts.consent}</p>
            </label>
          </div>
          <button type="submit" className="button-option form_input_button">{texts.send}</button>
          {errors.map((err, i) => <p key={i} className="error">{err}</p>)}
        </form>
      </div>
    </section>
  );
}

export default Form;

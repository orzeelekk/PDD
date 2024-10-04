import React, {useState} from "react";
import "./_form.scss";

function Form() {
    const [data, setData] = useState({
        Imie: '',
        Mail: '',
        Wiadomosc: ""
    })
    const [errors, setErrors] = useState([]);
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        const validationErrors = [];
        if (data.Imie.length < 3) {
            validationErrors.push('Imie musi być dłuzsze niz 2 znaków!');
        }
        if (data.Mail.length < 6) {
            validationErrors.push('Mail musi być dłuzszy niz 5 znaków!');
        }
        if (data.Wiadomosc.length < 11) {
            validationErrors.push('Wiadomość musi być dłuzsza niz 10 znaków!');
        }

        setErrors(validationErrors);
        if(validationErrors.length > 0) return;

        if(validationErrors.length === 0) {
            setTimeout(() => {
                setSubmitting(false);
            }, 3000)
            alert('Wiadomość wysłana.')
        }
    }

    return(
            <section className="contact container" id="contact">
                        <div className="contact_column">
                            <h2 className="contact_title">Pytania?</h2>
                            <p className="contact_instruction">Wyślij wiadomość lub zadzwoń.</p>
                            <div className="contact_details">
                                <div className="details_info_left">
                                    <div className="details_item">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72 13.28 13.28 0 0 0 .57 2.79 2 2 0 0 1-.45 2L8.1 10.11a16 16 0 0 0 6.9 6.9l.58-.58a2 2 0 0 1 2-.45 13.28 13.28 0 0 0 2.79.57 2 2 0 0 1 1.72 2.11z"/>
                                    </svg>
                                    <span className="details_info_phone">Kontakt telefoniczny: +48 518 330 003, +48 662 234 792</span>
                                </div>
                                <div className="details_item">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16v16H4z"/>
                                        <path d="M22 6l-10 7L2 6"/>
                                    </svg>
                                    <span className="details_info_mail">Kontakt mailowy: polskie.domy.development@outlook.com</span>
                                </div>
                                <div className="details_item">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                                        <circle cx="12" cy="9" r="2.5"/>
                                    </svg>
                                    <span className="details_info_address">Adres biura sprzedaży: Mińsk Mazowiecki, Warszawska 66/7, 05-300</span>
                                </div>
                            </div>
                            </div>
                            {submitting &&
                                <div className="form_pop">Wysyłanie formularza...</div>
                            }
                        </div>
                        
                        <div className="contact_column">
                        <form onSubmit={handleSubmit} className="form">
                            <div className="form_field">
                                <label className="form_label" htmlFor="name">Name</label>
                                <input
                                type="text"
                                className="form_input"
                                name="Imie"
                                value={data.Imie}
                                onChange={handleChange}
                                id="name"
                                />
                            </div>
                            <div className="form_field">
                                <label className="form_label" htmlFor="email">E-mail</label>
                                <input
                                type="email"
                                className="form_input"
                                name="Mail"
                                value={data.Mail}
                                onChange={handleChange}
                                id="email"
                                />
                            </div>
                            <div className="form_field">
                                <label className="form_label" htmlFor="message">Wiadomosc</label>
                                <textarea
                                className="form_input"
                                name="Wiadomosc"
                                value={data.Wiadomosc}
                                onChange={handleChange}
                                id="message"
                                ></textarea>
                            </div>
                            <div className="form_consent">
                                <label className="form_checkbox">
                                <input type="checkbox" id="consentCheckbox" />
                                <span className="checkbox"></span>
                                <p className="consent_text">
                                    Wyrażam zgodę na przetwarzanie moich danych osobowych przez spółkę Polskie Domy Development sp. z o. o. zgodnie z Polityką prywatności.
                                </p>
                                </label>
                            </div>

                            <button className="button-option form_input_button" type="submit">
                                Wyślij
                            </button>
                            {errors.map((error, index) => (
                                <p key={index} className="error">{error}</p>
                            ))}
                            </form>
                        </div>
        </section>


    )
}

export default Form;

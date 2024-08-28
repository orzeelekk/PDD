import React from 'react';
import "./_footer.scss"

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer_container container">
                    <div className="footer_info">
                    <div class="footer_info_left">
                        <div class="footer_item">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72 13.28 13.28 0 0 0 .57 2.79 2 2 0 0 1-.45 2L8.1 10.11a16 16 0 0 0 6.9 6.9l.58-.58a2 2 0 0 1 2-.45 13.28 13.28 0 0 0 2.79.57 2 2 0 0 1 1.72 2.11z"/>
                            </svg>
                            <a class="footer_info_phone">Kontakt telefoniczny: +48 518 330 003, +48 662 234 792</a>
                        </div>
                        <div class="footer_item">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 4h16v16H4z"/>
                                <path d="M22 6l-10 7L2 6"/>
                            </svg>
                            <a class="footer_info_mail">Kontakt mailowy: polskie.domy.development@outlook.com</a>
                        </div>
                        <div class="footer_item">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                                <circle cx="12" cy="9" r="2.5"/>
                            </svg>
                            <a class="footer_info_address">Adres biura sprzedaży: Mińsk Mazowiecki, Warszawska 66/7, 05-300</a>
                        </div>
                    </div>
                        <span className="footer_copy"> © 2024 PDD, All Rights Reserved</span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
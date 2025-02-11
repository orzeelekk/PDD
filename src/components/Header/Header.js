import React, { useState } from 'react';
import "./_header.scss";
import { headerItems } from './headerItems';
import logo from "../Assets/PDDLogov3.png";
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); // State for burger menu
    const navigate = useNavigate();
    const location = useLocation();

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        const yOffset = -100; // Offset for fixed header

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const sectionAfterNavigate = document.getElementById(id);
                if (sectionAfterNavigate) {
                    const y = sectionAfterNavigate.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 300);
        } else if (section) {
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        
        <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-XNSQYERKFC"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-XNSQYERKFC');
        </script>
            <div className="header_container container">
                <a className="header_logo" href="/">
                    <img src={logo} alt="Logo" height="100" />
                </a>
                <div className="header_navi">
                    {headerItems.map((menu, index) => (
                        <a key={index} className="header_navi_link" href={menu.url || "#"} onClick={() => handleScrollToSection(menu.sectionId)}>
                            {menu.title}
                        </a>
                    ))}
                </div>
                <div className="header_burger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className="header_menu">
                    {headerItems.map((menu, index) => (
                        <li key={index}>
                            <a className="header_menu_link" href={menu.url || "#"} onClick={() => {
                                setMenuOpen(false);
                                handleScrollToSection(menu.sectionId);
                            }}>
                                {menu.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="header_socialmedia">
                    <a href="https://www.facebook.com/people/Polskie-Domy-Development/61572630587264/" target="_blank" rel="noreferrer">
                    <svg className="facebook-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
                        <path d="M22.675 0h-21.35C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24H12.82V14.708h-3.41v-3.61h3.41V8.413c0-3.362 2.053-5.193 5.05-5.193 1.437 0 2.673.107 3.032.155v3.515h-2.08c-1.631 0-1.947.776-1.947 1.915v2.511h3.897l-.507 3.61h-3.39V24h6.65c.731 0 1.325-.592 1.325-1.324V1.325C24 .592 23.408 0 22.675 0z" />
                    </svg>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
import React from "react";
import PropTypes from 'prop-types';


const Dropdown = ({ submenus,dropdown }) => {
    console.log(submenus)

    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <ul key={index} className="menu-items">
                    <li>Powierzchnia terenu: {submenu.powierzchnia_terenu}</li>
                    <li>Powierzchnia zabudowy: {submenu.powierzchnia_zabudowy}</li>
                    <li>Powierzchnia użytkowa: {submenu.powierzchnia_uzytkowa}</li>
                    <li>Kubatura: {submenu.kubatura}</li>
                    <li>Ściany nośne zewnętrzne i wewnętrzne: {submenu.ściany_nośne_zewnętrzne_i_wewnętrzne}</li>
                    <li>Dach: {submenu.dach}</li>
                    <li>Instalacja grzewcza: {submenu.instalacja_grzewcza}</li>
                    <li>Instalacja wentylacyjna: {submenu.instalacja_wentylacyjna}</li>
                    <li>Ogrodzenie: {submenu.ogrodzenie}</li>
                    <li>Oprograowanie: {submenu.oprogramowanie}</li>
                </ul>
            ))}
        </ul>
    );
};

Dropdown.propTypes = {
    submenus: PropTypes.arrayOf(
        PropTypes.shape({
            powierzchnia_terenu: PropTypes.string.isRequired,
            powierzchnia_zabudowy: PropTypes.string.isRequired,
            powierzchnia_uzytkowa: PropTypes.string.isRequired,
            kubatura: PropTypes.string.isRequired,
            zabudowa: PropTypes.string.isRequired,
            ściany_nośne_zewnętrzne_i_wewnętrzne: PropTypes.string.isRequired,
            instalacja_grzewcza: PropTypes.string.isRequired,
            wentylacja: PropTypes.string.isRequired,
            ogrodzenie: PropTypes.string.isRequired,
            oprogramowanie: PropTypes.string.isRequired,
        })
    ).isRequired, // Expect an array of objects
    dropdown: PropTypes.bool.isRequired, // Expect a boolean
};

export default Dropdown;


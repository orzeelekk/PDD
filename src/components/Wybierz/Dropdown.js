import React from "react";
import PropTypes from 'prop-types';

const Dropdown = ({ submenus, dropdown }) => {
    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <ul key={index} className="menu-items">
                    {Object.entries(submenu).map(([key, value]) => (
                        <li key={key}>
                            <span className="bold">{key.replaceAll('_', ' ')}:</span> <span className="normal">{value}</span>
                        </li>
                    ))}
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
            ściany_nośne_zewnętrzne_i_wewnętrzne: PropTypes.string.isRequired,
            dach: PropTypes.string.isRequired,
            instalacja_grzewcza: PropTypes.string.isRequired,
            instalacja_wentylacyjna: PropTypes.string.isRequired,
            ogrodzenie: PropTypes.string.isRequired,
            oprogramowanie: PropTypes.string.isRequired,
        })
    ).isRequired,
    dropdown: PropTypes.bool.isRequired,
};

export default Dropdown;

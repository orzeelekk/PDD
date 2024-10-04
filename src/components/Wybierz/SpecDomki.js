import Dropdown from './Dropdown';
import PropTypes from 'prop-types';
import { useState } from "react";
import "./_wybierz.scss";

const SpecDomki = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);

    const handleClick = (event) => {
        event.preventDefault(); 
        setDropdown((prev) => !prev);
    };

    return (
        <>
            <button
                type="button"
                className="button-option"
                id="button-dropdown"
                aria-expanded={dropdown ? "true" : "false"}
                onClick={handleClick} 
            >
                {items.title}
            </button>
            <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
    );
};

SpecDomki.propTypes = {
    items: PropTypes.shape({
        title: PropTypes.string.isRequired, // Expect title to be a required string
        submenu: PropTypes.arrayOf(
            PropTypes.shape({
                // Define the expected shape of each submenu item
                powierzchnia_terenu: PropTypes.string.isRequired,
                powierzchnia_zabudowy: PropTypes.string.isRequired,
                powierzchnia_uzytkowa: PropTypes.string.isRequired,
                kubatura: PropTypes.string.isRequired,
                zabudowa: PropTypes.string.isRequired,
            })
        ).isRequired, // Expect submenu to be an array of objects
    }).isRequired, // Expect items to be an object
};

export default SpecDomki;

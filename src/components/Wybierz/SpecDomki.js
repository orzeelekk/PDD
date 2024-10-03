import Dropdown from './Dropdown';
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

export default SpecDomki;

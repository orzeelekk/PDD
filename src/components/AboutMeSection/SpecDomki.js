import Dropdown from './Dropdown';
import {useState} from "react";
import "./_aboutMeSection.scss";

const SpecDomki = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <button type="button" className={"button_spec"}
                    aria-expanded={dropdown ? "true" : "false"}
                    onClick={() => setDropdown((prev) => !prev)}
            >
                {items.title}{" "}
            </button>
            <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
    );
};

export default SpecDomki;
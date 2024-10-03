import React from "react";

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
                    <li>Zabudowa: {submenu.zabudowa}</li>
                </ul>
            ))}
        </ul>
    );
};

export default Dropdown;


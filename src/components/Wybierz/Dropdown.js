import React from "react";
import PropTypes from 'prop-types';

const fieldLabels = {
  Powierzchnia_terenu: "Powierzchnia terenu",
  Powierzchnia_zabudowy: "Powierzchnia zabudowy",
  Powierzchnia_uzytkowa: "Powierzchnia użytkowa",
  Kubatura: "Kubatura",
  Zabudowa: "Zabudowa",
  Ściany_nośne_zewnętrzne_i_wewnętrzne: "Ściany nośne zewnętrzne i wewnętrzne",
  Dach: "Dach",
  Instalacja_grzewcza: "Instalacja grzewcza",
  Instalacja_wentylacyjna: "Instalacja wentylacyjna",
  Ogrodzenie: "Ogrodzenie",
  Oprogramowanie: "Oprogramowanie",
  Plot_area: "Plot area",
  Building_area: "Building area",
  Usable_area: "Usable area",
  Cubature: "Cubature",
  Development_type: "Development type",
  Load_bearing_walls: "Load-bearing walls",
  Roof: "Roof",
  Heating_installation: "Heating installation",
  Ventilation: "Ventilation",
  Fence: "Fence",
  Smart_home: "Smart home",
};

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <ul key={index} className="menu-items">
          {Object.entries(submenu).map(([key, value]) => (
            <li key={key}>
              <span className="bold">{fieldLabels[key] || key.replaceAll('_', ' ')}:</span>{" "}
              <span className="normal">{value}</span>
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

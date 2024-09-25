import React, {useState} from 'react';
import "./_header.scss";
import Icon from './Icon'
import { headerItems } from './headerItems';

import logo from "../Assets/PDDLogov3.png"

const Header = () => {
    return (
        <>
        <header className="header">
            <div className="header_container container">                
                <a className="header_logo" href="/">
                    <img src={logo} alt="jakiś plik" height='100'
                    />
                </a>
                <ul className="header_navi">
                    {headerItems.map((menu, index) => {
                        return(
                            <li key={index}>
                                <a className="header_navi_link" href={menu.url}
                                >{menu.title}</a>
                            </li>
                        )
                    })}
                </ul>
                <div className="header_socialmedia">
                    <svg class="facebook-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
                        <path d="M22.675 0h-21.35C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24H12.82V14.708h-3.41v-3.61h3.41V8.413c0-3.362 2.053-5.193 5.05-5.193 1.437 0 2.673.107 3.032.155v3.515h-2.08c-1.631 0-1.947.776-1.947 1.915v2.511h3.897l-.507 3.61h-3.39V24h6.65c.731 0 1.325-.592 1.325-1.324V1.325C24 .592 23.408 0 22.675 0z"/>
                    </svg>
                    {/* <a href="https://www.youtube.com/channel/UC4EcLfZbiW9GIQYlqPTSGGg" target="_blank"><img src={instagram} alt="instagram"/></a> */}
                </div>
            </div>
        </header>
            <div className="header_road">
                <div className="header_road_line"></div>
            </div>
        </>
    );
};

export default Header;
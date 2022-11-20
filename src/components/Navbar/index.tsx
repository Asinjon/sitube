import React from 'react';
import "./style.css";
import {AiOutlineMenu} from "react-icons/ai";
import {SiYoutubetv} from "react-icons/si";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from '../../redux/app';
import {backend} from "../../urls";

const hamburgerDark = {color: "white",};
const hamburgerLight = {};
export default function Navbar() {
  const {theme} = useSelector((state: RootState) => state.theme);
  return (
    <header className={"main-header"  + ` ${theme}`}>
      <div className="main-header__wrapper">
        <div className="main-header__logomenu">
          <AiOutlineMenu style={theme === "light" ? hamburgerLight : hamburgerDark} className="hamburger" />
          <div className="logo">
            <img src={backend + (theme === "light" ? "/app/logo_light.svg" : "/app/logo_dark.svg")} alt="Brand" />
          </div>
        </div>
        <div className="main-header__search"></div>
        <div className="main-header__profile"></div>
      </div>
    </header>
  )
}

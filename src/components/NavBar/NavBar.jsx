import { LanguageContext } from "../../context/LanguageContext";
import { NavLink } from "react-router-dom";
import { PiShoppingCartLight } from "react-icons/pi";
import { PiUserCircleLight } from "react-icons/pi";
import style from "./NavBar.module.scss";
import { useContext } from "react";

export const NavBar = ({ action }) => {
  const { setLanguageData, languageData } = useContext(LanguageContext);

  function handleLanguageChange(event) {
    setLanguageData(event.target.value === "dansk");
  }

  return (
    <nav className={style.navStyling}>
      <ul className={style.headingIcon}>
        <li>
          <NavLink to="/">Sunshine Coffee</NavLink>
        </li>
        <div>
          <img src="../src/assets/icons8-coffee-100.png" alt="" />
        </div>
      </ul>
      <ul className={style.rightNav}>
        <li>
          <select onChange={handleLanguageChange} name="" id="">
            <option value="engelsk">English</option>
            <option value="dansk">Dansk</option>
          </select>
        </li>
        <li onClick={action}>
          <PiShoppingCartLight />
        </li>
        <li>
          <NavLink to="/user">
            <PiUserCircleLight />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

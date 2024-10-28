import { NavLink } from "react-router-dom";
import { PiShoppingCartLight } from "react-icons/pi";
import { PiUserCircleLight } from "react-icons/pi";
import style from "./NavBar.module.scss";

export const NavBar = () => {
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
          <select name="" id="">
            <option value="dansk">Dansk</option>
            <option value="engelsk">English</option>
          </select>
        </li>
        <li>
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

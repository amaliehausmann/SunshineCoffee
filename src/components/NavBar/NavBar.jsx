import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/products">PRODUCTS</NavLink>
        </li>
      </ul>
    </nav>
  );
};

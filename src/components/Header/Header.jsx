import { Cart } from "../Cart/Cart";
import { NavBar } from "../NavBar/NavBar";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={style.headerStyling}>
      <NavBar />
      <h1>We Love Coffee <br /> And all the people who make it</h1>
    </header>
  );
};

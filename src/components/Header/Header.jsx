import { useContext } from "react";
import { Cart } from "../Cart/Cart";
import style from "./Header.module.scss";
import { LanguageContext } from "../../context/LanguageContext";
import { PageDivider } from "../PageDivider/PageDivider";

export const Header = () => {
  const { languageData } = useContext(LanguageContext);
  return (
    <header className={style.headerStyling}>
      {languageData ? (
        <h1>
          Vi Elsker Kaffe <br /> Og alle dem, som laver det
        </h1>
      ) : (
        <h1>
          We Love Coffee <br /> And all the people who make it
        </h1>
      )}
      <PageDivider />
    </header>
  );
};

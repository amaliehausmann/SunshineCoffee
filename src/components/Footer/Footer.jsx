import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";
import style from "./Footer.module.scss";

export const Footer = () => {
  const { languageData } = useContext(LanguageContext);
  return (
    <footer className={style.footerStyling}>
      {languageData ? (
        <section className={style.sectionStyling}>
          <section>
            <h5>Kontakt</h5>
            <ul>
              <li>Supercoffeeroad 223b</li>
              <li>92230 New Coffeeland</li>
              <li>Phone: 22331122</li>
              <li>Mail: coffeeland@info.com</li>
            </ul>
          </section>
          <section>
            <h5>Betingelser</h5>
            <ul>
              <li>
                <Link to="/cookiepolicy">Cookiepolitik</Link>
              </li>
              <li>
                <Link to="/returnpolicy">Returpolitik</Link>
              </li>
              <li>
                <Link to="/shipping">Fragt og levering</Link>
              </li>
              <li>
                <Link to="/terms">Vilkår og betingelser</Link>
              </li>
            </ul>
          </section>
          <section>
            <h5>Om</h5>
            <ul>
              <li>Historie</li>
              <li>Personerne bag</li>
              <li>Samarbejdspartnere</li>
              <li>International</li>
            </ul>
          </section>
        </section>
      ) : (
        <section className={style.sectionStyling}>
          <section>
            <h5>Contact</h5>
            <ul>
              <li>Supercoffeeroad 223b</li>
              <li>92230 New Coffeeland</li>
              <li>Phone: 22331122</li>
              <li>Mail: coffeeland@info.com</li>
            </ul>
          </section>
          <section>
            <h5>Legal</h5>
            <ul>
              <li>
                <Link to="/cookiepolicy">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/returnpolicy">Return Policy</Link>
              </li>
              <li>
                <Link to="/shipping">Shipping</Link>
              </li>
              <li>
                <Link to="/terms">Terms and Conditions</Link>
              </li>
            </ul>
          </section>
          <section>
            <h5>About</h5>
            <ul>
              <li>History</li>
              <li>The people behind</li>
              <li>Partnerships</li>
              <li>International</li>
            </ul>
          </section>
        </section>
      )}
    </footer>
  );
};

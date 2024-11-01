import style from "./HomeCard.module.scss";

export const HomeCard = ({ title, description, imgSrc, styling, children }) => {
  return (
    <div className={`${style[styling]}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      {imgSrc && <img src={`../src/assets/${imgSrc}`} alt="" />}
      {children}
    </div>
  );
};

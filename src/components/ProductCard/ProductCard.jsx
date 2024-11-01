import style from "./ProductCard.module.scss";
export const ProductCard = ({
  title,
  imageSrc,
  price,
  children,
  valuta1,
  valuta2,
  roastAmount,
  action,
  styling
}) => {
  return (
    <div className={`${style[styling]}`}>
      <h1 onClick={action}>{title}</h1>
      <div
        onClick={action}
        style={{ backgroundImage: `url(${imageSrc})` }}
        className={style.imageStyling}
      ></div>
      <div className={style.roastContainer}>
        <p>Roast:</p>
        {[1, 2, 3, 4, 5].map((roast) => (
          <span
            key={roast}
            className={`${style.roastStyling} ${
              roastAmount >= roast ? style.fillRoast : ""
            }`}
          ></span>
        ))}
      </div>
      <h2>
        {valuta1}
        {price}
        {valuta2}
      </h2>
      {children}
    </div>
  );
};

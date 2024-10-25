import style from "./ProductCard.module.scss";
export const ProductCard = ({ title, imageSrc, price, description }) => {
  return (
    <div className={style.cardStyling}>
      <h1>{title}</h1>
      <img src={imageSrc} alt={title} />
      <h2>${price}</h2>
      <p>{description}</p>
      <button>Add To Cart</button>
    </div>
  );
};

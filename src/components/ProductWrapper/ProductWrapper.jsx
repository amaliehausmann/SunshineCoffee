import style from "./ProductWrapper.module.scss";

export const ProductWrapper = ({ children }) => {
  return <section className={style.wrapperStyling}>{children}</section>;
};

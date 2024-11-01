import style from "./Wrapper.module.scss";

export const Wrapper = ({ children, styling }) => {
  return <section className={`${style[styling]}`}>{children}</section>;
};

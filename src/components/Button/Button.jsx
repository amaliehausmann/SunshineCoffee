import style from "./Button.module.scss";

export const Button = ({ buttontext, action, children, styling }) => {
  return (
    <button className={`${style[styling]}`} onClick={action}>
      {buttontext}
      {children}
    </button>
  );
};

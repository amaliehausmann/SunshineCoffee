import { IoCart } from "react-icons/io5";
import style from './Cart.module.scss'
export const Cart = () => {

  return (
    <div>
        <IoCart className={style.CartIcon}/>
    </div>
  )
}
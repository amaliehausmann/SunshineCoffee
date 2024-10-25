import { Cart } from "../Cart/Cart"
import { NavBar } from "../NavBar/NavBar"
import style from './Header.module.scss'

export const Header = () => {
  return (
    <header className={style.headerStyling}>
        <h1>CoolSide.dk</h1>
        <NavBar/>
        <Cart/>
    </header>
  )
}
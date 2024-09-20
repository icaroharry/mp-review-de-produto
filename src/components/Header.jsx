import "./Header.css";
import Logo from "../assets/logo.svg";
import CartIcon from "../assets/cart-icon.svg";

export default function Header() {
  return (
    <header>
      <img src={Logo} className="logo" alt="Logo" />
      <img src={CartIcon} className="cart-icon" alt="Cart Icon" />
    </header>
  );
}

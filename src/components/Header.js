import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <div className="header__logo" />
      <p className="header__email">xxx@email.com</p>
      <Link className="header__authorization" to="/sign-in">Войти</Link>
    </header>
  )
}

export default Header;
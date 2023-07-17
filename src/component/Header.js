import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <a href="/">Logo</a>
      <nav>
        <h3>
          <NavLink to={"/"}> Home </NavLink>
        </h3>
        <h3>
          <NavLink to={"/about"}> About </NavLink>
        </h3>
        <h3>
          <NavLink to={"/contect"}> Contect </NavLink>
        </h3>
      </nav>
    </header>
  );
};

export default Header;

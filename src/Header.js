import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/.Contact"}>Contact</Link>
      <Link to={"/.About"}>About</Link>
      <Link to={"./signup"}>SignUp</Link>
    </nav>
  );
};
export default Header;

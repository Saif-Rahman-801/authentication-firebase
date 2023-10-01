import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/login">Signin </NavLink>
      <NavLink to="/register">Register </NavLink>
    </div>
  );
};

export default Navbar;

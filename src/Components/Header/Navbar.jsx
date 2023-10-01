import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthProvider);
  return (
    <div>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/login">Signin </NavLink>
      <NavLink to="/register">Register </NavLink>
      <div>{user && <span>{user.email} </span>}</div>
      <div>
        {user ? (
          <button onClick={logOut}>Sign out</button>
        ) : (
          <Link to="/login">Log in</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      {loggedIn === false && (
        <>
          <Link to="/register">
            <button>Register</button>
          </Link>
          <Link to="/login">
            <button>Log In</button>
          </Link>
        </>
      )}
      {loggedIn === true && (
        <>
          <Link to="/customer">
            <button>Customers</button>
          </Link>
          <LogOutBtn />
        </>
      )}
    </div>
  );
}

export default Navbar;

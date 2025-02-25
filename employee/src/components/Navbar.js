import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img height={50} src="logo192.png"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              
              {isAuthenticated ? (
                <>
                 <Link className="nav-link active" aria-current="page" to="/list">Employees</Link>
        <button className="btn btn-danger" onClick={logout}>Logout</button>
        </>
      ) : (
        <>
        <Link className="nav-link" to="/register">Register</Link>
        <Link className="btn btn-success" to="/login">Login</Link>
        </>
      )}
              
              {/* {isAuthenticated ? (
              <>
              <Link className="nav-link active" aria-current="page" to="/list">Employees</Link>
              <LogoutButton/>
              </>
              
            )
              :(<><Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link" to="/register">Register</Link>
                </>
              )
                } */}
              </div>
            </div>
          </div>
          </nav>
    );
  };
  
  export default Navbar;

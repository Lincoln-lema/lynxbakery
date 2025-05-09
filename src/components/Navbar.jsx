import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const isActive = (path) => location.pathname === path ? "active-link" : "";

  return (
    <nav
      className={`navbar navbar-expand-md shadow-sm mt-1 sticky-top ${darkMode ? "navbar-dark" : ""}`}
      style={{ backgroundColor: darkMode ? "#2c2c2c" : "#8B4513" }}
    >

        {/* Brand Logo */}
        <Link to="/" className="navbar-brand fw-bold text-white">
          Lynx<span className="text-danger">Bakery</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarcontents"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarcontents">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <b><Link to="/" className={`nav-link text-white ${isActive("/")}`}>See Cakes</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/placeorder" className={`nav-link text-white ${isActive("/placeorder")}`}>Order Cake</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/addcake" className={`nav-link text-white ${isActive("/addcake")}`}>Add Cake</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/aboutus" className={`nav-link text-white ${isActive("/aboutus")}`}>About Us</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/chatbot" className={`nav-link text-white ${isActive("/chatbot")}`}>Lynx Assistant</Link></b>
            </li>
          </ul>

          {/* Authorization + Theme Button */}
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item me-2">
              <Link to="/signin" className="btn signin-btn" style={{ backgroundColor: "#6d4c41", color: "white" }}>Sign IN</Link>
            </li>
            <li className="nav-item me-2">
              <Link to="/signup" className="btn signup-btn" style={{ backgroundColor: "#d2691e", color: "white" }}>Sign UP</Link>
            </li>
            <li className="nav-item">
              <button onClick={handleThemeToggle} className="btn btn-sm toggle-btn text-white">
                {darkMode ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>
        </div>

    </nav>
  );
};

export default Navbar;

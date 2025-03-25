import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md shadow-sm mt-1" style={{ backgroundColor: "#8B4513" }}>
   
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
              <b><Link to={"/"} className="nav-link text-white">See Cakes</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to={"/placeorder"} className="nav-link text-white">Order Cake</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to={"/addcake"} className="nav-link text-white">Add Cake</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to={"/mpesapayment"} className="nav-link text-white">Lipa na Mpesa</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to={"/aboutus"} className="nav-link text-white">About Us</Link></b>
            </li>
          </ul>

          {/* Authorization Links (Aligned Right) */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/signin" className="btn me-2" style={{ backgroundColor: "#6d4c41", color: "white" }}>Sign IN</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="btn" style={{ backgroundColor: "#d2691e", color: "white" }}>Sign UP</Link>
            </li>
          </ul>
        </div>
     
    </nav>
  );
};

export default Navbar;

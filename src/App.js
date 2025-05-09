import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PlaceOrder from "./components/PlaceOrder";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import AddCake from "./components/AddCake";
import Mpesapayment from "./components/Mpesapayment";
import GetCakes from "./components/GetCakes";
import "bootstrap/dist/js/bootstrap.min.js";
import 'aos/dist/aos.css';
import Navbar from "./components/Navbar";
import Aboutus from "./components/Aboutus";
import ChatBot from "./components/ChatBot";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header d-flex align-items-center justify-content-center gap-2 py-3">
          <img
             src="/images/lynx logo.jpg"
             alt="Lynx Bakery Logo"
             className="logo-img"
          />
          <h1 className="fs-4 fw-bold mb-0">Lynx Bakery - Order Your Favorite Cakes</h1>
          <Navbar/>
        </header>

        {/* <nav>
          <Link to={"/"} className="links">Get Cakes</Link>
          <Link to={"/placeorder"} className="links">Place Order</Link>
          <Link to={"/addcake"} className="links">Add Cake</Link>
          <Link to={"/signin"} className="links">Sign In</Link>
          <Link to={"/signup"} className="links">Sign Up</Link>
          <Link to={"/mpesapayment"} className="links">Mpesa Payment</Link>
        </nav> */}

        <Routes>
          <Route path="/" element={<GetCakes />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/addcake" element={<AddCake />} />
          <Route path="/mpesapayment" element={<Mpesapayment />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/chatbot" element={<ChatBot />} />
        </Routes>

        
      </div>
      <Footer />
    </Router>
  );
}

export default App;

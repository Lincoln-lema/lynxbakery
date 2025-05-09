import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSigninRedirect = () => {
    navigate("/signin");
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const data = new FormData();
      data.append("username", username);
      data.append("email", email);
      data.append("password", password);
      data.append("phone", phone);

      const response = await axios.post(
        "https://lincolin.pythonanywhere.com/api/signup",
        data
      );

      setSuccess(response.data.Message);
      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");
    } catch (error) {
      setError("Sign-up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="signup-page">
        <div className="form-container">
          <form className="form" onSubmit={submit}>
            <h2 className="form-title">Join Lynx Bakery 🍰</h2>

            {success && <p className="text-success">{success}</p>}
            {error && <p className="text-danger">{error}</p>}
            {loading && <p className="text-primary">Processing your request...</p>}

            <div className="flex-column">
              <label>Username</label>
            </div>
            <div className="inputForm">
              <input
                type="text"
                placeholder="Enter your Username"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="flex-column">
              <label>Email</label>
            </div>
            <div className="inputForm">
              <input
                type="email"
                placeholder="Enter your Email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex-column">
              <label>Password</label>
            </div>
            <div className="inputForm">
              <input
                type="password"
                placeholder="Create your Password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex-column">
              <label>Phone Number</label>
            </div>
            <div className="inputForm">
              <input
                type="text"
                placeholder="Enter your Phone Number"
                className="input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="button-submit" disabled={loading}>
              {loading ? "Signing up..." : "Sign Up"}
            </button>

            <p className="p">
              Already have an account?{" "}
              <span className="span" onClick={handleSigninRedirect}>
                Sign In
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

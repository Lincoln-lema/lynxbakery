import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post(
        "https://lincolin.pythonanywhere.com/api/signin",
        formData
      );

      setLoading(false);

      if (response.data && response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
      } else {
        setError(response.data.Message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      setLoading(false);
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  const redirectToSignup = () => {
    navigate("/signup");
  };

  const handleForgotPassword = () => {
    navigate("/reset-password");
  };

  return (
    <div className="signin-page">
      <div className="form-container">
        <form className="form" onSubmit={submit}>
          <h2 className="form-title">Sign In</h2>

          {error && <p className="text-danger">{error}</p>}
          {loading && <p className="text-warning">Logging in...</p>}

          <div className="flex-column">
            <label>Email</label>
          </div>
          <div className="inputForm">
            <svg height="20" viewBox="0 0 32 32" width="20">
              <path d="M30.85 13.87a15 15 0 0 0-29.73 4.08 15.1 15.1 0 0 0 12.88 12.92 15.6 15.6 0 0 0 2.02.13 14.85 14.85 0 0 0 7.71-2.15 1 1 0 0 0-1.03-1.71 13.01 13.01 0 1 1 5.46-6.53 2.15 2.15 0 0 1-4.16-.76v-10.86a1 1 0 0 0-2 0v1.73a8 8 0 1 0 .2 10.33 4.14 4.14 0 0 0 7.83.27 15.2 15.2 0 0 0 .82-7.45zM16 22a6 6 0 1 1 6-6 6.01 6.01 0 0 1-6 6z" />
            </svg>
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
            <svg height="20" viewBox="-64 0 512 512" width="20">
              <path d="M336 512H48c-26.5 0-48-21.5-48-48V240c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48zM48 224c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16z" />
              <path d="M304 224c-8.8 0-16-7.2-16-16v-80c0-52.9-43.1-96-96-96s-96 43.1-96 96v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80c0-70.6 57.4-128 128-128s128 57.4 128 128v80c0 8.8-7.2 16-16 16z" />
            </svg>
            <input
              type="password"
              placeholder="Enter your Password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex-row">
            <div>
              <input type="checkbox" />
              <label> Remember me </label>
            </div>
            <span className="span" onClick={handleForgotPassword}>
              Forgot password?
            </span>
          </div>

          <button type="submit" className="button-submit" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>

          <p className="p">
            Don't have an account?{" "}
            <span className="span" onClick={redirectToSignup}>
              Sign Up
            </span>
          </p>

          <p className="p line">Or With</p>

          <div className="flex-row">
            <button type="button" className="btn google">Google</button>
            <button type="button" className="btn apple">Apple</button>
          </div>
        </form>
        
      </div>
    </div>
    
  );
  
};

export default Signin;

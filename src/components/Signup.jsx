import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Signup = () => {
  // Initialize state hooks for form inputs
  const [username, setUsername] = useState("");  // Changed from fullName to username
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  // State hooks for feedback messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle signup submission
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const data = new FormData();
      data.append("username", username);  // Changed to match backend field name
      data.append("email", email);
      data.append("password", password);
      data.append("phone", phone);

      const response = await axios.post(
        "https://lincolin.pythonanywhere.com/api/signup",
        data
      );

      setSuccess(response.data.Message);
      setUsername("");  // Reset field
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
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-4">
        <h2 className="text-center text-danger">Join Lynx Bakery 🍰</h2>

        {success && <p className="text-success">{success}</p>}
        {error && <p className="text-danger">{error}</p>}
        {loading && <p className="text-primary">Processing your request...</p>}

        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            value={username}  // Updated field name
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />

          <input
            type="email"
            placeholder="Email Address"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />

          <input
            type="password"
            placeholder="Create Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />

          <input
            type="text"
            placeholder="Phone Number"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <br />

          <button type="submit" className="btn btn-success w-100" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-3 text-center">
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

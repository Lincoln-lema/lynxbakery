import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Mpesapayment = () => {
  // Extract cake details passed from the previous page
  const { cake } = useLocation().state || {};

  // Hooks for phone number, message, and loading state
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle payment submission
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("Processing your payment...");

    try {
      const data = new FormData();
      data.append("phone", phone);
      data.append("amount", cake?.price);// Using cake price

      const response = await axios.post(
        "https://lincolin.pythonanywhere.com/api/mpesa_payment",
        data
      );

      setMessage(response.data.message);
    } catch (error) {
      setMessage("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row justify-content-center mt-3">
      <h1 className="text-danger">Lipa na Mpesa</h1>
      <div className="col-md-6 card shadow p-3">
        {message && <b className="text-success">{message}</b>}

        <h4>Cake Name: <span className="text-primary">{cake?.name}</span></h4>
        <h4>Price: <span className="text-primary">Ksh {cake?.price}</span></h4>


        <form onSubmit={submit}>
          <input
            type="number"
            placeholder="Enter your Mpesa number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            required
          />
          <br />

          <button className="btn btn-success" type="submit" disabled={loading}>
            {loading ? "Processing..." : "Make Payment"}
          </button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Mpesapayment;


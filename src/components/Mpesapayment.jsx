import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LazyLoad from 'react-lazyload';
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Mpesapayment.css';

const Mpesapayment = () => {
  const { cake } = useLocation().state || {};

  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const img_url = "https://lincolin.pythonanywhere.com/static/images/";


  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("Processing your payment...");

    try {
      const data = new FormData();
      data.append("phone", phone);
      data.append("amount", cake?.price);

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
    <div className="payment-container">
      <div className="payment-card">
        <h1 className="text-danger">Lipa na Mpesa</h1>
        {message && <b className="text-success">{message}</b>}
        
        <h4><span> <LazyLoad height={200} once><img src={img_url + cake.image} className="card-img-top img-fluid card shadow-sm" alt={cake.name} style={{ height: '200px', objectFit: 'cover' }} /> </LazyLoad> </span></h4>
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

          <button className="submit-btn" type="submit" disabled={loading}>
            {loading ? "Processing..." : "Make Payment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Mpesapayment;

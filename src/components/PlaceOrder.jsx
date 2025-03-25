import axios from 'axios';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const PlaceOrder = () => {
  const [username, setUsername] = useState("");
  const [cake_name, setCakeName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [total_price, setTotalPrice] = useState("");

  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Placing your order, please wait...");

    const data = new FormData();
    data.append("username", username);
    data.append("cake_name", cake_name);
    data.append("quantity", quantity);
    data.append("total_price", total_price);

    try {
      const response = await axios.post("https://lincolin.pythonanywhere.com/api/placeorder", data);
      setLoading("");
      setMessage("Order placed successfully!");

      setTimeout(() => {
        setMessage("");
      }, 8000);

      setUsername("");
      setCakeName("");
      setQuantity("");
      setTotalPrice("");
    } catch (error) {
      setLoading("");
      setError("Failed to place order. Please try again.");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-4">
        <form onSubmit={submit}>
          <h2>Place Order</h2>

          {loading && <p className="text-warning">{loading}</p>}
          {message && <p className="text-success">{message}</p>}
          {error && <p className="text-danger">{error}</p>}

          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            required
          />
          <br />

          <input
            type="text"
            placeholder="Enter the cake name"
            value={cake_name}
            onChange={(e) => setCakeName(e.target.value)}
            className="form-control"
            required
          />
          <br />

          <input
            type="number"
            placeholder="Enter quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="form-control"
            required
          />
          <br />

          <input
            type="number"
            placeholder="Enter total price"
            value={total_price}
            onChange={(e) => setTotalPrice(e.target.value)}
            className="form-control"
            required
          />
          <br />

          <button type="submit" className="btn btn-danger">Place Order</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default PlaceOrder;

import axios from 'axios';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AddCake = () => {
  const [cake_name, setCakeName] = useState("");
  const [cake_description, setCakeDescription] = useState("");
  const [cake_price, setCakePrice] = useState("");
  const [cake_instructions, setCakeInstructions] = useState("");
  const [cake_photo, setCakePhoto] = useState(null);
  const [cake_ingredients, setCakeIngredients] = useState("");

  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait as we upload your cake details...");

    const data = new FormData();
    data.append("cake_name", cake_name);
    data.append("cake_description", cake_description);
    data.append("cake_price", cake_price);
    data.append("cake_instructions", cake_instructions);
    data.append("cake_image", cake_photo);
    data.append("cake_ingredients", cake_ingredients);

    try {
      const response = await axios.post("https://lincolin.pythonanywhere.com/api/addcake", data);
      setLoading("");
      setMessage("Cake Added Successfully.");

      setTimeout(() => {
        setMessage("");
      }, 8000);

      setCakeName("");
      setCakeDescription("");
      setCakePrice("");
      setCakeInstructions("");
      setCakePhoto(null);
    } catch (error) {
      setLoading("");
      setError("Failed to add cake. Please try again.");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-4 mt-2">
        <form onSubmit={submit}>
          <h2>Add Cake</h2>

          {loading && <p className="text-warning">{loading}</p>}
          {message && <p className="text-success">{message}</p>}
          {error && <p className="text-danger">{error}</p>}

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
            type="text"
            placeholder="Enter the cake ingredients"
            value={cake_ingredients}
            onChange={(e) => setCakeIngredients(e.target.value)}
            className="form-control"
            required
          />
          <br />

          <textarea
            placeholder="Enter a short description of the cake"
            className="form-control"
            value={cake_description}
            onChange={(e) => setCakeDescription(e.target.value)}
            required
          ></textarea>
          <br />

          <input
            type="number"
            placeholder="Enter the price"
            value={cake_price}
            onChange={(e) => setCakePrice(e.target.value)}
            className="form-control"
            required
          />
          <br />


          <textarea
            placeholder="Enter the baking instructions"
            className="form-control"
            value={cake_instructions}
            onChange={(e) => setCakeInstructions(e.target.value)}
            required
          ></textarea>
          <br />

          <label>Cake Photo</label>
          <br />
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setCakePhoto(e.target.files[0])}
            required
          />
          <br />
          <br />

          <button type="submit" className="btn btn-danger">Add Cake</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default AddCake;

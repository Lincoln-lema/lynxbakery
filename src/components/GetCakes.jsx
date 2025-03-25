import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { Carousel } from 'bootstrap';
import ImageCarousel from './Carousel';
import Navbar from './Navbar';

const GetCakes = () => {
  // State hooks
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCakes, setFilteredCakes] = useState([]);

  // Navigation hook
  const navigate = useNavigate();

  // Image URL base path
  const img_url = "https://lincolin.pythonanywhere.com/static/images/";

  // Fetch cakes function
  const getCakes = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get("https://lincolin.pythonanywhere.com/api/getcakes");
      setCakes(response.data);
      setFilteredCakes(response.data);
    } catch (error) {
      setError("There was an error fetching cakes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCakes();
  }, []);

  // Handle search functionality
  const handleSearch = () => {
    const results = cakes.filter(cake => 
      cake.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCakes(results);
  };

  return (
    <div className="row">
      <ImageCarousel />
      
      {/* Search Bar */}
      <div className="col-md-12 text-center mt-3 d-flex justify-content-center">
        <div className="input-group w-50">
        <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="Search for a cake..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary mt-0" onClick={handleSearch}>
          Search
        </button>
        </div>
      </div>

      <h3 className="text-info mt-3">Available Cakes</h3>
      {loading && <p>Loading cakes...</p>}
      {error && <p className="text-danger">{error}</p>}
      {filteredCakes.length === 0 && !loading && <p>No cakes available</p>}

      {filteredCakes.map((cake) => (
        <div className="col-md-3 justify-content-center mb-4" key={cake.id}>
          <div className="card shadow">
            <img src={img_url + cake.image} className="product_img mt-4" alt={cake.name} />
            <div className="card-body">
              <h5 className='mt-2 text-danger'>{cake.name}</h5>
              <p className='text-muted'>{cake.description.slice(0, 50)}...</p>
              <b className='text-warning'>Kes {cake.price}</b> <br />
              <button className='btn btn-primary' onClick={() => navigate("/mpesapayment", { state: { cake } })}> Order Now </button>

            </div>
          </div>
        </div>
      ))}

      <Footer/>
    </div>
  );
};

export default GetCakes;

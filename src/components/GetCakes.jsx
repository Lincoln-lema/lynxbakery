import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Modal, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import AOS from 'aos';
import LazyLoad from 'react-lazyload';
import { useNavigate } from 'react-router-dom';
import './GetCakes.css';
import ImageCarousel from './Carousel';
import 'aos/dist/aos.css';

const GetCakes = () => {
  const [cakes, setCakes] = useState([]);
  const [filteredCakes, setFilteredCakes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [modalCake, setModalCake] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const cakesPerPage = 6;

  const navigate = useNavigate();
  const img_url = "https://lincolin.pythonanywhere.com/static/images/";

  useEffect(() => {
    AOS.init();
    axios.get('https://lincolin.pythonanywhere.com/api/getcakes')
      .then((res) => {
        setCakes(res.data);
        setFilteredCakes(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    const filtered = cakes.filter(cake =>
      cake.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCakes(filtered);
    setCurrentPage(0);
  };

  useEffect(() => {
    let sorted = [...filteredCakes];
    if (sort === 'asc') sorted.sort((a, b) => a.price - b.price);
    else if (sort === 'desc') sorted.sort((a, b) => b.price - a.price);
    setFilteredCakes(sorted);
  }, [sort]);

  const handleFavorite = (id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCakes = useMemo(() => {
    const start = currentPage * cakesPerPage;
    return filteredCakes.slice(start, start + cakesPerPage);
  }, [currentPage, filteredCakes]);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click to view details
    </Tooltip>
  );

  return (
    <div className="getcakes-container">
      <div className="container-fluid px-0 mb-4">
        <div className="mx-auto" style={{ width: '85%', maxHeight: '400px' }}>
          <ImageCarousel />
        </div>
      </div>


      <div className="container py-4">
        <div className="d-flex justify-content-between mb-3">
          <div className="input-group w-50 me-2 d-flex justify-content-center align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="Search Cakes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-primary" onClick={handleSearch}>Search</button>
          </div>
          <select className="form-select w-25 h-7" onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort by Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        {loading ? (
          <Skeleton count={6} height={200} />
        ) : filteredCakes.length === 0 ? (
          <div className="text-center py-5">
            <p className="text-muted fs-4">🧁 No cakes match your search.</p>
          </div>
        ) : (
          <div className="row">
            {pageCakes.map(cake => (
              <div
                key={cake.id}
                className="col-md-4 mb-4"
                data-aos="fade-up"
              >
                <div className="card h-100 shadow-sm">
                  <LazyLoad height={200} once>
                    <img
                      src={img_url + cake.image}
                      className="card-img-top img-fluid"
                      alt={cake.name}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  </LazyLoad>
                  <div className="card-body">
                    <h5 className="card-title text-danger">{cake.name}</h5>
                    <p className="card-text text-muted">{cake.description.slice(0, 50)}...</p>
                    <p className="text-warning"><strong>Ksh {cake.price}</strong></p>
                    <div className="d-flex justify-content-between align-items-center">
                      <OverlayTrigger placement="top" overlay={renderTooltip}>
                        <Button variant="primary" size="sm" onClick={() => setModalCake(cake)}>Details</Button>
                      </OverlayTrigger>
                      <Button variant="success" size="sm" onClick={() => navigate("/mpesapayment", { state: { cake } })}>Order</Button>
                      <Button variant="link" onClick={() => handleFavorite(cake.id)}>
                        {favorites.includes(cake.id) ? <FaHeart color="red" /> : <FaRegHeart />}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredCakes.length > cakesPerPage && (
          <div className="d-flex justify-content-center mt-4">
            <ReactPaginate
              previousLabel={'Prev'}
              nextLabel={'Next'}
              breakLabel={'...'}
              pageCount={Math.ceil(filteredCakes.length / cakesPerPage)}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
              previousClassName={'page-item'}
              previousLinkClassName={'page-link'}
              nextClassName={'page-item'}
              nextLinkClassName={'page-link'}
              activeClassName={'active'}
            />
          </div>
        )}
      </div>

      <Modal show={!!modalCake} onHide={() => setModalCake(null)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalCake?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={img_url + modalCake?.image} alt={modalCake?.name} className="img-fluid mb-3" />
          <p><strong>Price:</strong> Ksh {modalCake?.price}</p>
          <p><strong>Description:</strong> {modalCake?.description || 'No description available.'}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalCake(null)}>Close</Button>
        </Modal.Footer>
      </Modal>

      
    </div>
  );
};

export default GetCakes;

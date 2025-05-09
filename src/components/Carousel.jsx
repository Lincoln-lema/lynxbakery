import { Link } from "react-router-dom";

const ImageCarousel = () => {
  return (
    <section className="row">
      <div className="col-12">
        <div id="mycarousel" className="carousel slide" data-bs-ride="carousel">
          
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>

          {/* Carousel Slides */}
          <div className="carousel-inner rounded shadow">
            <div className="carousel-item active">
              <img
                src="images/carrot.jpg"
                alt="Carrot Cake"
                className="d-block w-100"
                style={{ objectFit: 'fill', height: '400px', borderRadius: '8px' }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/chocolate cak.jpg"
                alt="Chocolate Cake"
                className="d-block w-100"
                style={{ objectFit: 'fill', height: '400px', borderRadius: '8px' }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/floral(pink).jpg"
                alt="Floral Pink Cake"
                className="d-block w-100"
                style={{ objectFit: 'fill', height: '400px', borderRadius: '8px' }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/orange cak.jpg"
                alt="Orange Cake"
                className="d-block w-100"
                style={{ objectFit: 'fill', height: '400px', borderRadius: '8px' }}
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <Link to="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </Link>
          <Link to="#mycarousel" className="carousel-control-next" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;

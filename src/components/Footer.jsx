//footer
const Footer = () => {
  return (
  <div>
      <section className="row mt-4 footer-background-color">
          <div className="col-md-4 text-left text-light">
              <h5 className="p-2 text-center text-info">About Us</h5>
              <p>Cakes are delightful baked treats made from flour, sugar, eggs, and butter, often flavored with chocolate, vanilla, or fruit.</p>
              <p>They bring joy to celebrations, offering rich flavors and a soft, moist texture that makes them irresistible.</p>
              <br/>
          </div>
          <div className="col-md-4 text-light">
              <h5 className="p-2 text-center text-info">Reach Us Out</h5>
              <input className="form-control" type="email" placeholder="Enter your email"/>
              <br/>
              <textarea className="form-control" rows="7" placeholder="Leave a comment"></textarea>
              <br/>
              <input type="submit" value="Send Message" className="btn btn-primary mb-2"/>
          </div>
          <div className="col-md-4">
              <h4 className="text-center text-info">Connect With Us</h4>
              <br/>
              <a href="https://facebook.com">
              <img src="images/facebook.jpg" alt="" className="socialspictures"/>
              </a>
              <a href="https://instagram.com">
              <img src="images/instagram.jpg" alt="" className="socialspictures"/>
              </a>
              <p className="text-dark">Cakes come in various flavors, textures, and designs, from layered sponge cakes to rich cheesecakes. They are a symbol of joy, perfect for birthdays, weddings, and special occasions. Whether frosted, filled, or topped with fruits and chocolate, cakes bring people together.</p>
          </div>
      </section>
      <footer className="text-white text-center p-2 mt-0 bottom-footer">
         <h5>Developed by Lincoln Kipngetich Lang'at &copy; 2025. All rights reserved</h5>
      </footer>
  </div>
  );
}

export default Footer;

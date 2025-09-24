import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./CartContext";
import ChockieVariety from "./ChockieVariety";
import ChockieDrinks from "./ChockieDrinks";
import Cart from "./Cart";
import Checkout from "./Checkout";
import { FaCookieBite, FaGlassWhiskey, FaCandyCane } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Carousel images
import donot from "./img/donot.jpg";
import cake2 from "./img/cake2.jpg";
import nutshoc from "./img/nutschoc.jpg";

function App() {
  return (
    <CartProvider>
      <Router>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
          <div className="container">
            <Link className="navbar-brand fw-bold fs-3" to="/">
              <span style={{ color: "#ffcc00" }}>Chocolate</span>{" "}
              <span style={{ color: "#ff6699" }}>Chockie🍫</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Varieties
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ChockieDrinks">
                    Drinks
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Cart">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Carousel */}
        <div
          id="chockieCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#chockieCarousel"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#chockieCarousel"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#chockieCarousel"
              data-bs-slide-to="2"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active text-center">
              <img
                src={donot}
                className="d-block w-100"
                alt="Donuts"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  <FaCookieBite className="me-2" />
                  Delicious Donuts
                </h5>
              </div>
            </div>

            <div className="carousel-item text-center">
              <img
                src={cake2}
                className="d-block w-100"
                alt="Cake"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  <FaGlassWhiskey className="me-2" />
                  Yummy Cake
                </h5>
              </div>
            </div>

            <div className="carousel-item text-center">
              <img
                src={nutshoc}
                className="d-block w-100"
                alt="Chocolate"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  <FaCandyCane className="me-2" />
                  Yummy Chocolate
                </h5>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#chockieCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#chockieCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<ChockieVariety />} />
          <Route path="/ChockieDrinks" element={<ChockieDrinks />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

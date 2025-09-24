import { useCart } from "./CartContext";

// Drinks images
import drink1 from "./img/drink1.jpg";
import drink2 from "./img/drink2.jpg";
import drink3 from "./img/drink3.jpg";
import drink4 from "./img/drink4.jpg";
import drink5 from "./img/drink5.jpg";
import drink6 from "./img/drink6.jpg";
import drink7 from "./img/drink7.jpg";
import drink8 from "./img/drink8.jpg";
import drink9 from "./img/drink9.jpg";

const drinks = [
  { id: 101, name: "Chocolate Milkshake", image: drink1, price: 120 },
  { id: 102, name: "Cold Coffee", image: drink2, price: 90 },
  { id: 103, name: "Hot Chocolate", image: drink3, price: 100 },
  { id: 104, name: "Choco Frappe", image: drink4, price: 150 },
  { id: 105, name: "Oreo Shake", image: drink5, price: 130 },
  { id: 106, name: "Nutella Shake", image: drink6, price: 160 },
  { id: 107, name: "Mocha Coffee", image: drink7, price: 110 },
  { id: 108, name: "Choco Smoothie", image: drink8, price: 140 },
  { id: 109, name: "KitKat Shake", image: drink9, price: 150 },
];

export default function ChockieDrinks() {
  const { cart, addToCart, increaseQty, decreaseQty } = useCart();

  const getQty = (id) => {
    const item = cart.find((i) => i.id === id);
    return item ? item.qty : 0;
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">🥤 Our Chockie Drinks 🍹</h3>
      <div className="row">
        {drinks.map((d) => (
          <div key={d.id} className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <img
                src={d.image}
                className="card-img-top"
                alt={d.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{d.name}</h5>
                <p>₹{d.price}</p>

                {getQty(d.id) === 0 ? (
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(d)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => decreaseQty(d.id)}
                    >
                      -
                    </button>
                    <span>{getQty(d.id)}</span>
                    <button
                      className="btn btn-success ms-2"
                      onClick={() => increaseQty(d.id)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

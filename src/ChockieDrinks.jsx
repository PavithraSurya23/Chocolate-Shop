import { useCart } from "./CartContext";

const drinks = [
  { id: 101, name: "Chocolate Milkshake", image: ${process.env.PUBLIC_URL}/img/drink1.jpg, price: 120 },
  { id: 102, name: "Cold Coffee", image: ${process.env.PUBLIC_URL}/img/drink2.jpg, price: 90 },
  { id: 103, name: "Hot Chocolate", image: ${process.env.PUBLIC_URL}/img/drink3.jpg, price: 100 },
  { id: 104, name: "Choco Frappe", image: ${process.env.PUBLIC_URL}/img/drink4.jpg, price: 150 },
  { id: 105, name: "Oreo Shake", image: ${process.env.PUBLIC_URL}/img/drink5.jpg, price: 130 },
  { id: 106, name: "Nutella Shake", image: ${process.env.PUBLIC_URL}/img/drink6.jpg, price: 160 },
  { id: 107, name: "Mocha Coffee", image: ${process.env.PUBLIC_URL}/img/drink7.jpg, price: 110 },
  { id: 108, name: "Choco Smoothie", image: ${process.env.PUBLIC_URL}/img/drink8.jpg, price: 140 },
  { id: 109, name: "KitKat Shake", image: ${process.env.PUBLIC_URL}/img/drink9.jpg, price: 150 },
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

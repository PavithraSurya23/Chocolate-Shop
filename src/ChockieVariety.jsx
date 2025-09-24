import { useCart } from "./CartContext";

// 🔥 Import images from img folder
import brownie from "./img/brownie.jpg";
import cake2 from "./img/cake2.jpg";
import darkbar from "./img/darkbar.jpg";
import darkchock from "./img/darkchock.jpg";
import dhubai from "./img/dhubai.jpg";
import ice from "./img/ice.jpg";
import icebar from "./img/icebar.jpg";
import icecone from "./img/icecone.jpg";
import piececake from "./img/piececake.jpg";

const products = [
  { id: 1, name: "Brownie", image: brownie, price: 50 },
  { id: 2, name: "Cake", image: cake2, price: 120 },
  { id: 3, name: "Dark Bar Chocolate", image: darkbar, price: 70 },
  { id: 4, name: "Dark Chocolate", image: darkchock, price: 90 },
  { id: 5, name: "Dubai Chocolate", image: dhubai, price: 200},
  { id: 6, name: "Chocolate Ice Cream Rich", image: ice, price: 60 },
  { id: 7, name: "IceBar Wonder", image: icebar, price: 110 },
  { id: 8, name: "Cone Ice Chockie", image: icecone, price: 150 },
  { id: 9, name: "Dark Piece Cake", image: piececake, price: 80 },
];

export default function ChockieVariety() {
  const { cart, addToCart, increaseQty, decreaseQty } = useCart();

  const getQty = (id) => {
    const item = cart.find((i) => i.id === id);
    return item ? item.qty : 0;
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">🍩 Our Chockie Varieties 🍫</h3>
      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <img
                src={p.image}
                className="card-img-top"
                alt={p.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{p.name}</h5>
                <p>₹{p.price}</p>

                {getQty(p.id) === 0 ? (
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(p)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => decreaseQty(p.id)}
                    >
                      -
                    </button>
                    <span>{getQty(p.id)}</span>
                    <button
                      className="btn btn-success ms-2"
                      onClick={() => increaseQty(p.id)}
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

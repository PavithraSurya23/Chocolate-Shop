import { useCart } from "./CartContext";

const products = [
  { id: 1, name: "Brownie", image: ${process.env.PUBLIC_URL}/img/brownie.jpg, price: 50 },
  { id: 2, name: "Cake", image: ${process.env.PUBLIC_URL}/img/cake2.jpg, price: 120 },
  { id: 3, name: "Dark Bar Chocolate", image: ${process.env.PUBLIC_URL}/img/darkbar.jpg, price: 70 },
  { id: 4, name: "Dark Chocolate", image: ${process.env.PUBLIC_URL}/img/darkchock.jpg, price: 90 },
  { id: 5, name: "Dubai Chocolate", image: ${process.env.PUBLIC_URL}/img/dhubai.jpg, price: 200 },
  { id: 6, name: "Chocolate Ice Cream Rich", image: ${process.env.PUBLIC_URL}/img/ice.jpg, price: 60 },
  { id: 7, name: "IceBar Wonder", image: ${process.env.PUBLIC_URL}/img/icebar.jpg, price: 110 },
  { id: 8, name: "Cone Ice Chockie", image: ${process.env.PUBLIC_URL}/img/icecone.jpg, price: 150 },
  { id: 9, name: "Dark Piece Cake", image: ${process.env.PUBLIC_URL}/img/piececake.jpg, price: 80 },
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

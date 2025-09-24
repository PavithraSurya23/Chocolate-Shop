import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, increaseQty, decreaseQty } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">🛒 Your Cart</h3>

      {cart.length === 0 ? (
        <p className="text-center">No items in cart.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>Image</th>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "80px", height: "60px", objectFit: "cover" }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-sm btn-danger me-2"
                        onClick={() => decreaseQty(item.id)}
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        className="btn btn-sm btn-success ms-2"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>₹{item.price * item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Total */}
      <div className="text-end mt-3">
        <h4>Total: ₹{total}</h4>
        <button
          className="btn btn-success mt-2"
          onClick={() => navigate("/Checkout")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

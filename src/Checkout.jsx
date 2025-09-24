
import { useCart } from "./CartContext";
import { useState } from "react";

export default function Checkout() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    payment: "COD",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    alert(
      `✅ Order Placed!\n\nName: ${form.name}\nEmail: ${form.email}\nMobile: ${form.mobile}\nAddress: ${form.address}\nPayment: 
      ${form.payment}\n\nTotal: ₹${total}`
  );

    console.log("Order details:", { form, cart, total });
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">🛍 Checkout</h3>

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Mobile</label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="col-12">
          <label className="form-label">Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            className="form-control"
            rows="3"
            required
          ></textarea>
        </div>

        <div className="col-md-6">
          <label className="form-label">Payment Method</label>
          <select
            name="payment"
            value={form.payment}
            onChange={handleChange}
            className="form-select"
          >
            <option value="COD">Cash on Delivery</option>
            <option value="UPI">UPI</option>
            <option value="Card">Credit/Debit Card</option>
          </select>
        </div>

        <div className="col-12 text-end">
          <h5>Total: ₹{total}</h5>
          <button type="submit" className="btn btn-success mt-2">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}

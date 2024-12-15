import React from "react";

const Cart = ({ cartItems, onRemoveItem, onUpdateQuantity }) => {
  // Calculate the total price of the items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
                style={{ width: "100px", height: "100px" }} // Adjust image size as needed
              />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Price: ${item.price.toFixed(2)}</p>
                <div className="cart-item-actions">
                  <button onClick={() => onRemoveItem(item.id)}>Remove</button>
                  <div className="quantity-controls">
                    <button
                      disabled={item.quantity <= 1} // Prevent decreasing below 1
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;

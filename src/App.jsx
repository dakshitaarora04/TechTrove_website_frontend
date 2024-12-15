import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import HomePage from "./Pages/HomePage.jsx"; 
import AboutPage from "./Pages/AboutPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";

function App() {
  const [cartItems, setCartItems] = React.useState([]);

  // Add item to cart
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Update quantity if item already exists
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      // Add new item
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Remove item from cart
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Update item quantity in cart
  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage onAddToCart={handleAddToCart} />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onRemoveItem={handleRemoveItem}
              onUpdateQuantity={handleUpdateQuantity}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from backend or database
    const fetchCartItems = async () => {
      // Example data fetch
      const response = await fetch('/api/cart'); // Replace with actual API endpoint
      const data = await response.json();
      setCartItems(data);
    };

    fetchCartItems();
  }, []);

  const handleQuantityChange = (id, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <div className="cart-item-quantity">
                  <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                  <input
                    id={`quantity-${item.id}`}
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  />
                </div>
                <button onClick={() => handleRemoveItem(item.id)} className="remove-button">Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${calculateTotal()}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

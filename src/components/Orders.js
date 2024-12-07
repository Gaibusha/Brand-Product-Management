import React, { useState, useEffect } from 'react';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from backend or database
    const fetchOrders = async () => {
      // Example data fetch
      const response = await fetch('/api/orders'); // Replace with actual API endpoint
      const data = await response.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders-container">
      <h1 className="orders-title">Your Orders</h1>
      {orders.length === 0 ? (
        <p>You have no orders.</p>
      ) : (
        <div className="orders-list">
          {orders.map(order => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <h2>Order #{order.id}</h2>
                <span className="order-date">Placed on: {new Date(order.date).toLocaleDateString()}</span>
              </div>
              <div className="order-details">
                {order.items.map(item => (
                  <div key={item.id} className="order-item">
                    <img src={item.imageUrl} alt={item.name} className="order-item-image" />
                    <div className="order-item-info">
                      <h3>{item.name}</h3>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="order-total">
                <h3>Total: ${order.total.toFixed(2)}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;

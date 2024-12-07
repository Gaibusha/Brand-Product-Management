import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import BrandList from './components/BrandList';
import BrandForm from './components/BrandForm';
import CategoryList from './components/CategoryList';
import CategoryForm from './components/CategoryForm';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import ChatBot from './components/ChatBot'; 
import ContactUs from './components/ContactUs'; 
import Orders from './components/Orders';  // Import Orders component
import Cart from './components/Cart';  // Import Cart component

const App = () => {
  const handleSaveProduct = (product) => {
    console.log('Product saved:', product);
  };

  const handleSaveBrand = (brand) => {
    console.log('Brand saved:', brand);
  };

  const handleLogin = (credentials) => {
    console.log('User logged in:', credentials);
  };

  const handleSignup = (user) => {
    console.log('User signed up:', user);
  };

  return (
    <Router>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/add-product" element={<ProductForm onSave={handleSaveProduct} />} />
            <Route path="/edit-product/:id" element={<ProductForm onSave={handleSaveProduct} initialData={{ name: 'Sample Product', description: 'This is a sample product.', category: 'Sample Category', price: 99.99, image: 'https://via.placeholder.com/150', brand: 'Sample Brand' }} />} />
            <Route path="/brands" element={<BrandList />} />
            <Route path="/add-brand" element={<BrandForm onSave={handleSaveBrand} />} />
            <Route path="/edit-brand/:id" element={<BrandForm onSave={handleSaveBrand} initialData={{ name: 'Sample Brand', description: 'This is a sample brand.', logo: 'https://via.placeholder.com/150' }} />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/add-category" element={<CategoryForm />} />
            <Route path="/edit-category/:id" element={<CategoryForm />} />
            <Route path="/orders" element={<Orders />} />  {/* Add Orders route */}
            <Route path="/cart" element={<Cart />} />  {/* Add Cart route */}
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/chat-bot" element={<ChatBot />} /> 
            <Route path="/contact-us" element={<ContactUs />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

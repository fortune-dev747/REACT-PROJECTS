import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/tracking/TrackingPage';
import './App.css'
import { NotFoundPage } from './pages/NotFoundPage';


function App() {
  const [cart, setCart] = useState([]);
  
  const loadCart = async () => {
      const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
    }


  useEffect(() => {
    loadCart(); 
  }, []);
  return (
    <Routes>
      <Route 
       path="/" 
       element={<HomePage cart={cart} loadCart={loadCart}/>} 
      />
      <Route 
       path="checkout"  
       element={<CheckoutPage cart={cart} loadCart={loadCart} />} 
      />
      <Route 
       path="orders" 
       element={<OrdersPage cart={cart} />} 
      />
      <Route 
       path="tracking" 
       element={<TrackingPage />} 
      />
      <Route 
       path="*"
       element={<NotFoundPage />} 
      />
    </Routes>
  )
}

export default App

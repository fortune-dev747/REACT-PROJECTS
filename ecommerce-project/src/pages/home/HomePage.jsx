import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { Header } from '../../components/Header'
import { ProductsGrid } from './ProductsGrid'
import './HomePage.css'


export function HomePage({ cart, loadCart }) {
    const [products, setProducts] = useState([]);
    // Features for the search bar on the home page
 const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
    useEffect(() => {
        const getHomeData = async () => {
            // If search is not empty, we will search for products
          const urlPath = search ? `/api/products?search=${search}` : '/api/products';
          const response = await axios.get(urlPath);
            setProducts(response.data);
        }
        getHomeData();
    }, [search]);

    return (
        <>
         <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
            <title>Ecommerce Project</title>

            <Header cartItems={cart} cart={cart}/>
            
            <div className="home-page">
            <ProductsGrid products={products} loadCart={loadCart} />
            </div>
       </>
    );
}
import { NavLink, useNavigate } from 'react-router'
import { useState } from 'react'
import { useSearchParams } from 'react-router';
import './header.css'

export function Header({ cart=[] }) {
    const navigate = useNavigate();
    // Features for the search bar on the home page
    const [searchParams] = useSearchParams();

  // Using "searchText" instead of "search" as a different variable name since "search" is already being used below.
  const searchText = searchParams.get('search');

  // || '' is a shortcut. It means if searchText does not exist
  // it will use a default value of ''.
  const [search, setSearch] = useState(searchText || '');
    const updateSearchInput = (event) => {
      setSearch(event.target.value);
    };

  const searchProducts = () => {
    // When clicked on search button, navigate to the home page
   navigate(`/?search=${search}`);
  };

  const showSearch = (event) => {
        if (event.key === 'Enter') {
        searchProducts();
        }   
   };


 //   Features to show the number of items in the cart
    let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });
    

  

    return (
        <div className="header">
            <div className="left-section">
                <NavLink to="/" className="header-link">
                <img className="logo"
                    src="images/nexus-ecommerce-removebg-preview.png" />
                <img className="mobile-logo"
                    src="images/mobile-logo-white.png" />
                </NavLink>
            </div>

            <div className="middle-section">
                <input 
                 className="search-bar" 
                 type="text" 
                 placeholder="Search" 
                 onChange={updateSearchInput} 
                 onKeyDown={showSearch} 
                />

                <button className="search-button" onClick={searchProducts}>
                <img className="search-icon" src="images/icons/search-icon.png" />
                </button>
            </div>

            <div className="right-section">
                <NavLink className="orders-link header-link" to="/orders">

                <span className="orders-text">Orders</span>
                </NavLink>

                <NavLink className="cart-link header-link" to="/checkout">
                <img className="cart-icon" src="images/icons/cart-icon.png" />
                <div className="cart-quantity">{totalQuantity}</div>
                <div className="cart-text">Cart</div>
                </NavLink>
            </div>
            </div>
    )
}
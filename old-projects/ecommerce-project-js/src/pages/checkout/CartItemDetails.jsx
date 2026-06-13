import dayjs from "dayjs";
import axios from "axios";
import { useState } from "react";
import { formatMoney } from "../../utils/money";
import { DeliveryOptions } from "./DeliveryOptions";

export function CartItemDetails({ cartItem, deliveryOptions, loadCart }) {
    const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
    const [quantity, setQuantity] = useState(cartItem.quantity);
    const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
        return deliveryOption.id === cartItem.deliveryOptionId;
    });
 
    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCart();
    };

    const updateQuantity = async () => {
      // Switch between true and false for isUpdatingQuantity.

        if (isUpdatingQuantity) {
            // when we update the value in the textbox then the quantity updates to our inputted value in the textbox.
            await axios.put(`/api/cart-items/${cartItem.productId}`, {
                quantity: Number(quantity),
            });
            await loadCart();
         setIsUpdatingQuantity(false);
        } else {
        setIsUpdatingQuantity(true);
        }
    };

    const inputQuantity = (event) => {
        setQuantity(event.target.value);
    };

    const enterInputQuantity = (event) => {
        if (event.key === 'Enter') {
            updateQuantity();
        }
        if (event.key === 'Escape') {
            setQuantity(cartItem.quantity);
            setIsUpdatingQuantity(false);
        }
    };


    return (
    <div  className="cart-item-container">
        <div className="delivery-date">
            Delivery date: 
            {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
        </div>

        <div className="cart-item-details-grid">
            <img className="product-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity:{isUpdatingQuantity ? 
                        <input type="text" 
                            className="quantity-input" 
                            value={quantity} 
                            onChange={inputQuantity} 
                            onKeyDown={enterInputQuantity} 
                        /> 
                        : <span className="quantity-label">{cartItem.quantity}</span>}  
                    </span>
                    <span className="update-quantity-link link-primary"
                     onClick={updateQuantity}>
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary"
                     onClick={deleteCartItem}>
                        Delete
                    </span>
                </div>
            </div>

            <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart} />
        </div>
    </div>
    );
}
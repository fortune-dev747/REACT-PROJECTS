import { DeliveryOptions } from './DeliveryOptions';
import { CartItemDetails } from '../../components/CartItemDetails';

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
                    return deliveryOption.id === cartItem.deliveryOptionId;
                });

                return (
                    <CartItemDetails key={cartItem.id} cartItem={cartItem} deliveryOptions={deliveryOptions} deliveryOption={selectedDeliveryOption} loadCart={loadCart}/>
                )
            })}
        </div>
    )
}
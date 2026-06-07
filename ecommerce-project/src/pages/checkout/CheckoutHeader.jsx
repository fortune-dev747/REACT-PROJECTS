import { Link } from 'react-router'
import './CheckoutHeader.css'

export function CheckoutHeader() {
    return(
        <div className="checkout-header">
            <div className="header-content">
                <div className="checkout-header-left-section">
                <Link href="/">
                    <p>Back</p>
                    <img className="mobile-logo" src="images/mobile-logo.png" />
                </Link>
                </div>

                <div className="checkout-header-middle-section">
                Checkout (<Link className="return-to-home-link"
                    href="/">3 items</Link>)
                </div>

                <div className="checkout-header-right-section">
                <img src="images/icons/checkout-lock-icon.png" />
                </div>
            </div>
         </div>
    )
}
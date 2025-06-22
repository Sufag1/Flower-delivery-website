import ShoppingBag from '../assets/shoppingbag.svg';
import './Header.css';


const Header = () => {
    return ( 
        <>
        <div className="header">
            <div className="header-icons">
                <div className="header-ic ham">
                    &#9776;
                </div>
                <div className="header-ic shopbag">
                    <img src={ShoppingBag} alt="" />
                </div>
            </div>
        </div>

        {/* 1440 Nav bar */}

        <div className="header-1440">
            <div className="shop-contact">
                <div className="shop-1440">
                    <span>Shop</span>
                </div>
                <div className="contact-1440">
                    <span>Contact</span>
                </div>
            </div>

            <div className="sign-cart">
                <div className="sign-1440">
                    <span>Sign in</span>
                </div>
                <div className="cart-1440">
                    <span>Cart</span>
                </div>
            </div>
        </div>
        </>

     );
}
 
export default Header;
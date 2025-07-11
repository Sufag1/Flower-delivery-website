import ShoppingBag from '../assets/shoppingbag.svg';
import './Header.css';
import { Link } from "react-router-dom";
import HamburgerMenu from './Hamburger Menu';
import { useState } from 'react';


const Header = () => {

    const [ openHamburger, setOpenHamburger] = useState(false);

    return ( 
        <>
        <div className="header">
            <div className="header-icons">
                <div className="header-ic ham">
                    <Link className='no-underline' onClick={() => setOpenHamburger(true)}>&#9776;</Link>            
                </div> 
                <div className="header-ic shopbag">
                    <Link to= "/cart"><img src={ShoppingBag} alt="" /></Link>
                </div>
            </div>
        </div>

        {/* Hamburger Menu Drawer */}

        <HamburgerMenu isOpen={openHamburger} onClose={() => setOpenHamburger(false)} />
       
        {/* 1440 Nav bar */}

        <div className="header-1440">
            <div className="shop-contact">
                <Link to="/shop" className='no-underline'>
                    <div className="shop-1440">
                        <p>Shop</p>
                    </div>
                </Link>
                
                <Link to="/contact" className='no-underline' >
                    <div className="contact-1440">
                        <p>Contact</p>
                    </div>
                </Link>   
            </div>

            <div className="sign-cart">
                <Link to="/signin" className='no-underline'>
                    <div className="sign-1440">
                        <p>Sign in</p>
                    </div>
                </Link>
                
                <Link to="/fresh" className='no-underline'>
                    <div className="cart-1440">
                        <p>Cart</p>
                    </div>
                </Link>
            </div>
        </div>
        </>

     );
}
 
export default Header;
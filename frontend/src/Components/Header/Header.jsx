import ShoppingBag from '../../assets/shoppingbag.svg';
import './Header.css';


const Header = () => {
    return ( 
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
     );
}
 
export default Header;
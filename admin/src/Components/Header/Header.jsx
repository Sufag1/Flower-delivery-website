import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <>
        <div className="header">
            <h1>Admin Panel</h1>
            <div className="header-buttons">
                <Link to="/flowers"><button className="flowers-btn">Flowers</button></Link>
                <Link to="/add-flowers"><button className="add-flowers-btn">Add Flowers</button></Link>
            </div>
        </div>
        <hr />
        </>
    );
}
 
export default Header;
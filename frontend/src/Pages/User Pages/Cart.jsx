import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Cart = () => {
    const [flower, setFlower] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    

    useEffect(() => {
        const fetchFlower = async () => {
            try {
                const res = await fetch(`https://flower-delivery-website-m3-api.onrender.com/api/flowers/${id}`);
                const data = await res.json();
                setFlower(data);
            }
            catch (err) {
                setError("Failed to load Flower details.");
            } finally {
                setLoading(false);
            }
        };
        fetchFlower();
    }, [id]);


    return ( 
        <h1>Welcome to Cart page</h1>
     );
}
 
export default Cart;
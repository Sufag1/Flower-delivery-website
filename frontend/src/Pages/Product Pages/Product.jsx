import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";


const Product = () => {

    const { id } = useParams();
    const [flower, setFlower] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [count, setCount] = useState(0);
    const [randomFlowers, setRandomFlowers] = useState(null);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };


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




    useEffect(() => {
        const fetchRandomFlowers = async () => {
            try {
                const res = await fetch("https://flower-delivery-website-m3-api.onrender.com/api/flowers/random");
                const data = await res.json();
                setRandomFlowers(data.flowers);
            } catch (err) {
                setError("Failed to fetch flowers.");
            } finally {
                setLoading(false);
            }
        };

            fetchRandomFlowers();
            }, []);


        if(loading) return <div>Flower Loading...</div>
        if(error) return <div>{error}</div>
        if(!flower) return <div>Flower not Found</div>



    return ( 
        <>
        <div className="flower-detail-page">
            <div className="product-card">
                <div className="product-image">
                    <img src={flower.image} alt="flower pic" className="flower-image" />
                </div>

                <div className="product-details">
                    <h5 className="producttext">BOUQUETS FRESH FLOWERS / QUICK ORDER</h5>
                    <h3 className="producttext">{flower.name}</h3>
                    <p className="producttext">{flower.description}</p>
                </div>

                <div className="flower-quantity">
                    <h3>Quantity</h3>
                    <div className="quantity-flex">
                        <button className="incdec" onClick={decrementCount}>-</button>
                        <div className="count-display">{count}</div>
                        <button className="incdec" onClick={incrementCount}>+</button>
                    </div>
                </div>

                <div className="add-basket">
                    <button className="add-basket-btn">ADD TO BASKET</button>
                </div>



            </div>

            <div className="ymal">
                <h3>You may also like…</h3>
            </div>

            <div className="suggestions">
                <div className="random-flower">
                    <img src={randomFlowers} alt="" />
                </div>
            </div>

        </div>


        </>
     );
}
 
export default Product;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";


const Product = () => {

    const { id } = useParams();
    const [flower, setFlower] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [count, setCount] = useState(1);
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


        if(loading) return <div className="flowerloading">Flower Loading...</div>
        if(error) return <div>{error}</div>
        if(!flower) return <div className="noflowersmsg">Flower not Found</div>



    return ( 
        <>
        <div className="flower-detail-page">
            <div className="product-card">
                <div className="product-image">
                    <img src={flower.image} alt="flower pic" className="flower-image" />
                    <h5 className="producttext hh5">BOUQUETS FRESH FLOWERS / QUICK ORDER</h5>
                    <h3 className="producttext hh3">{flower.name} - ${flower.price}</h3>
                </div>

                <div className="product-details">
                    <p className="producttext pp">{flower.description}</p>
                </div>

                <div className="flower-quantity">
                    <h3 className="qh">Quantity</h3>
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

            { /* 1440 screen */}
            <div className="container-1440">
                <div className="image-1140">
                    <img src={flower.image} alt="flower pic" className="flower-image" />
                </div>
                <div className="details-1440">
                    <h5 className="producttext hh5">BOUQUETS FRESH FLOWERS / QUICK ORDER</h5>
                    <h3 className="producttext hh3">{flower.name} - ${flower.price}</h3>
                    <p className="producttext pp">{flower.description}</p>
                    <div className="qfl">
                        <h3 className="qh">Quantity</h3>
                        <div className="qbtn">
                            <button className="incdec" onClick={decrementCount}>-</button>
                            <div className="count-display"> <span className="count">{count}</span> </div>
                            <button className="incdec" onClick={incrementCount}>+</button>
                        </div>
                </div>
                <div className="add-basket-con">
                    <button className="add-basket-btn">ADD TO BASKET</button>
                </div>
            </div>
    </div>

            <div className="ymal">
                <h3>You may also like…</h3>
            </div>

            <div className="suggestions">
                {randomFlowers && randomFlowers.map((item) => (
                    <div className="random-flower" key={item._id}>
                        <img src={item.image} alt={item.name} />
                        <h5 className="rh5">{item.name}</h5>
                        <p className="rp">${item.price}</p>
                    </div>
                 ))}
            </div>

        </div>


        </>
     );
}
 
export default Product;
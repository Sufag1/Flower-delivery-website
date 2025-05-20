import '../Flower/Flower.css';
import { useEffect, useState } from "react";
const Flowers = () => {
    const [ flowers, setFlowers ] = useState([]);


    const fetchFlowers = async () => {
        const res = await fetch("http://localhost:4000/api/flowers");
        const data = await res.json();
        setFlowers(data);
    };
    useEffect(() => {
        fetchFlowers();
    },[]);


    const deleteFlower = async (id) => {
        await fetch("http://localhost:4000/api/flowers" + id, { method: "DELETE"});
        fetchFlowers();
    };



    return ( 
        <div className="container">
            <div className="flower-list" key={flowers._id}>
                {flowers.map((flower) => (
                    <div className="flower-card">
                        <div className="flower-img">
                            <img src={flower.image} alt={flower.name} />
                            <span className="delete-icon" onClick={() => deleteFlower(flower._id)}>-</span>
                        </div>
                        <div className="flower-details">
                            <p><strong>Name:</strong> {flower.name} </p>
                            <p><strong>Category:</strong> {flower.category} </p>
                            <p><strong>Price:</strong> {flower.price} </p>
                            <p><strong>Description:</strong> {flower.description} </p>
                        </div>
                    </div>
                ))};
            </div>
        </div>
    );
};

export default Flowers;
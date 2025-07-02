import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './Category.css';
import { Link } from "react-router-dom";
import StampImage from "../../assets/fresh-hero.png";
// import FreshStamp from "../../assets/fresh.png";
// import DriedStamp from "../../assets/dried.png";
// import LiveStamp from "../../assets/live plants.png";
// import AromaStamp from "../../assets/aroma.png";
// import FreshenerStamp from "../../assets/fresheners.png";

const Category = () => {
  const { categoryType } = useParams();
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const categoryMap = {
    fresh: "Fresh Flowers",
    dried: "Dried Flowers",
    live: "Live Plants",
    aroma: "Aroma Candels",
    fresheners: "Fresheners",
  };

  // const stampMap = {
  //   fresh: FreshStamp,
  //   dried: DriedStamp,
  //   live: LiveStamp,
  //   aroma: AromaStamp,
  //   fresheners: FreshenerStamp,
  // };

  const categoryName = categoryMap[categoryType];
  // const stampImage = stampMap[categoryType];


  useEffect(() => {
    if (!categoryName) {
      setError("Invalid category");
      setLoading(false);
      return;
    }

    const fetchFlowers = async () => {
      try {
        const res = await fetch(
          `https://flower-delivery-website-m3-api.onrender.com/api/flowers`
        );
        const data = await res.json();

        const filtered = data.flowers.filter(
          (flower) => flower.category === categoryName
        );
        setFlowers(filtered);
        console.log(data.imageUrl);
      } catch (err) {
        setError("Error fetching flowers.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchFlowers();
  }, [categoryName]);

  if (loading) {
    return <div className="flowerloading">Loading flowers...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (flowers.length === 0) {
    return <div className="noflowersm">No flowers found in the "{categoryName}" category.</div>;
  }

  return (
    <>
    <div className="category-page">
        <div className="category-stamp-img">
            <img className="category-stamp" src={StampImage} alt="stamp" />
            <h3>{categoryName}</h3>
        </div>

        <div className="flowers-grid">
            {flowers.map((flower) => (
                <Link to={`/product/${flower._id}`} key={flower._id}>
                    <div className="flower-item">
                        <img src={flower.image} alt={flower.name} />
                        <div className="flower-np">
                            <h6>{flower.name}</h6>
                            <p>Price: ${flower.price}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
      </div>    
      </>
  );
};

export default Category;

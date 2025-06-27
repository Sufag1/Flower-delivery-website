import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Category = () => {
  const { categoryType } = useParams();
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Map the route param to actual category names used in your database
  const categoryMap = {
    fresh: "Fresh Flowers",
    dried: "Dried Flowers",
    live: "Live Plants",
    aroma: "Aroma Candels",
    fresheners: "Fresheners",
  };
  const categoryName = categoryMap[categoryType];

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

        // Filter flowers by category
        const filtered = data.filter(
          (flower) => flower.category === categoryName
        );
        setFlowers(filtered);
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
    return <div>Loading flowers...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (flowers.length === 0) {
    return <div>No flowers found in the "{categoryName}" category.</div>;
  }

  return (
    <div className="category-page">
      <h1>{categoryName}</h1>
      <div className="flowers-grid">
        {flowers.map((flower) => (
          <div key={flower._id} className="flower-item">
            <img src={flower.imageUrl} alt={flower.name} />
            <h3>{flower.name}</h3>
            <p>{flower.description}</p>
            <span>Price: ${flower.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

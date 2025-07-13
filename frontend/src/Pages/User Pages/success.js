import "./success.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear cart after successful payment
    localStorage.removeItem("cart");

    // Optional: Redirect home after a delay
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="success-container">
      <div className="success-message">
        <h1>🎉 Thank You for Your Purchase!</h1>
        <p>Your order has been successfully placed and is being processed.</p>
        <p>You will be redirected to the home page shortly.</p>
        <button onClick={() => navigate("/home")} className="success-btn">
          Return Home Now
        </button>
      </div>
    </div>
  );
};

export default Success;

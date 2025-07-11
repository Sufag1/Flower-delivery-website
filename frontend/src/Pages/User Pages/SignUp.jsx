import "./SignUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../../assets/Google.svg";
import AppleLogo from "../../assets/Apple.svg";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await fetch("https://flower-delivery-website-m4-backend.onrender.com/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful!");
        localStorage.setItem("token", data.data.token);
        navigate("/home")
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">
          Sign up
        </h2>
        <h6>Become a member and enjoy personalized gift recommendations, fast checkout, and more.</h6>
        <input
          type="email"
          className="signup-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="signup-input"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}


        />
        <button onClick={handleSignup} className="signup-continue">CONTINUE</button>

        <h6>Instantly login or sign up via Google</h6>

        <button className="social-button">
          <img src={GoogleLogo} alt="Google" className="icon" />
          CONTINUE WITH GOOGLE
        </button>

        <button className="social-button">
          <img src={AppleLogo} alt="Apple" className="icon" />
          CONTINUE WITH APPLE
        </button>

        <div className="privacy-terms-links">
          <a href="privacy">Privacy Policy</a>
          <br />
          <a href="terms">Terms and Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

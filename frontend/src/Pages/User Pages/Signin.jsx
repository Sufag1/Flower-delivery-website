import "./SignIn.css";
import { useState } from "react";
import GoogleLogo from "../../assets/Google.svg";
import AppleLogo from "../../assets/Apple.svg";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [email, setEmail] = useState(""); // or phone, if you're using phone auth
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const res = await fetch("https://flower-delivery-website-m4-backend.onrender.com/apiusers/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Sign In successful");
        localStorage.setItem("token", data.data.token); // Save token to localStorage
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
    <div className="signin-container">
      <div className="signin-box">
        <h2 className="signin-title">Greetings! <br />Welcome to luxury gift shop.</h2>
        <h6>Use your email to sign up or log in</h6>

        <input
          type="email"
          className="signin-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="signin-input"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="signin-continue" onClick={handleSignIn}>CONTINUE</button>

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
          <a href="/privacy">Privacy Policy</a><br />
          <a href="/terms">Terms and Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

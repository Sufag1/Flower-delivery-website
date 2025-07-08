import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import Category from './Pages/Category Pages/Category';
import Product from './Pages/Product Pages/Product';
import Subscription from './Pages/Subscription Page/Subscription';
import About from './Pages/About Us Page/AboutUs';
import Cart from './Pages/User Pages/Cart';
function App() {
  return (
    <div className="App-container">
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/category/:categoryType" element={<Category />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/subscription" element={<Subscription />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart/:id" element={<Cart />}></Route>
         
        </Routes>
        <Footer />
      </>
    </div>
  );
}
export default App;

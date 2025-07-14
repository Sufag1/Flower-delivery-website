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
import SignIn from './Pages/User Pages/Signin';
import SignUp from './Pages/User Pages/SignUp'
import Contact from './Components/Contact';
import Cate from './Components/Shop';
import Success from './Pages/User Pages/success';
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
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/shop" element={<Cate />} />
          <Route path="/success" element={<Success />} />         
        </Routes>
        <Footer />
      </>
    </div>
  );
}
export default App;

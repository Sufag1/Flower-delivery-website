import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import Category from './Pages/Category Pages/Category';
import Product from './Pages/Product Pages/Product';
function App() {
  return (
    <div className="App-container">
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path="/category/:categoryType" element={<Category />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </>
    </div>
  );
}
export default App;

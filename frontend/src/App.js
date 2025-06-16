import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/About Section/About';
import Benefits from './Components/Benefits Section/Benefits';
import Left from './Components/Left Column/LeftColumn';
import Category from './Components/Category Section/Category';
import Contact from './Components/Contact Us Section/Contact';
import Service from './Components/Service Section/Service';
import Review from './Components/Review Section/Review';

function App() {
  return (
    <div className="App">
      <Header />
      <Left />
      <Category />
      <About />
      <Benefits />
      <Contact />
      <Service />
      <Review />
      <Footer />
    </div>
  );
}

export default App;

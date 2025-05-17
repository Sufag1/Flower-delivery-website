import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/flowers' />}></Route>
        <Route path='/flowers' element={<Flowers/>}></Route>
        <Route path='/add-flowers' element={<AddFlowers/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;

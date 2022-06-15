import logo from './logo.svg';
import './App.css';
import Exchange from './components/Exchange';
import CatFacts from './components/CatFacts';
import Items from './components/Items';
import { Routes, Route, Link } from 'react-router-dom';
import Register from './components/Item/Register'



function App(props) {
  return ( 
  
    <div className='App'>
  <Link to="/cat-facts">Cat Facts</Link> |{" "}
  <Link to="/exchange">Exchange</Link> |{" "}
  <Link to="/Items">Items</Link>
  

  <Routes>
    <Route path="/cat-facts" element= {<CatFacts/>} />
    <Route path="/exchange" element= {<Exchange/>} />
    <Route path="/items" element= {<Items/>} />
    <Route path="register" element= {<Register/>} />
  </Routes>
    <Route path="*" element= {<CatFacts/>} />
  </div> 
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Products from './Components/Products';
import ProductList from './Components/ProductList';
import About from './Components/About';

function RouteConfig() {
  return (
    <div>
    <Router>
     <Routes>
       
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/Products/:id" element={<ProductList/>} />
       
        <Route path="*" element={<Error/>}/>
        
     </Routes>
      
    </Router>
    </div>
  );
}
export default RouteConfig;
function Error() {
  return(
  <di> <h1>404: Not Found</h1></di>
  
   );
} 
 
import React from 'react'
import shoe from './../Shoe.json';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
 const Products = () => {
    
    return (
        <div>
        <NavBar/>
        <div className="Container">
            
        {Object.keys(shoe).map(keyName =>{
            const shoes= shoe[keyName];
            return(
                <Link key={keyName} className="link"
                to={`/Products/${keyName}`}>
                    <h2>{shoes.name}</h2>
                    <img src={shoes.image} height={150} alt="Images"/>
                    <h4>Price: {shoes.price}</h4>
                    </Link>
            )
        })}
        </div>
        </div>
    )
}
export default Products;
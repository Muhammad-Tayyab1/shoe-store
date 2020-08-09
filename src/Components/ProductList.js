import React from 'react'
import { useParams } from 'react-router-dom';
import shoe from "./../Shoe.json";
import NavBar from './NavBar';
 const ProductList = () => {
     const { id } = useParams();
     const Shoe = shoe[id];
     if(!Shoe)
     return <h3>Product Not Found!</h3>
     console.log(Shoe);
console.log(id);
    return (
        <div>
            <NavBar className="NavBar"/>
            <div className="link">
                    <h2>{Shoe.name}</h2>
                    <img src={Shoe.image} height={350} alt="Images"/>
                    <h4>Price: {Shoe.price}</h4>
                    </div>
        </div>
    )
}
export default ProductList;
import React from 'react'
import NavBar from './NavBar'
import images from './../Images/https___hype.jpg';
 function Home() {
    return (
        <div className="img">
            <h1 className="heading">WellCome to Shoe Store</h1>
            <NavBar/>
            <h4 className="headings">Please go to the Products to see different styles Shoe:</h4>
            <img src={images} alt="images" className="boxsh"/>
        </div>
    )
}
export default Home;
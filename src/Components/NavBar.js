import React from 'react'
import {Link} from 'react-router-dom';
 const NavBar = () => {
    return (
        <div className="NavBarStyle">
          <Link to="/" className="Nav" > Home </Link>  
           <Link to="/Products"   className="Nav" >products </Link>
          <Link to="/about"  className="Nav" > About-us</Link>
        </div>
    )
}
export default NavBar;
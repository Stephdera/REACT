import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
       <div>
          <div className="bg-[#502274] text-[#fff] header">
             <div className="logo">
                <Link to="">STAR Enterprise</Link>
             </div>
              <div className="navbar">
                 <ul>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/product">Products</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/sign">Sign up</Link></li>
                    <li><Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link></li>
                 </ul>
              </div>
          </div>
       </div>
    </>
  )
}

export default Header;

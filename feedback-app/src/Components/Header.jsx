


import React from 'react'
import { Link } from "react-router-dom"

function Header() {
  return (
    <>
        <div className='p-5 bg-[#0433] header'>
            <div className=" font-serif font-xl font-bold uppercase logo">
                <h2>Feedback</h2>
            </div>
            <div className="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>Contact Us</li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>SignUp</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header;

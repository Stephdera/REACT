import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import EcomContext from '../context/EcomContext';

function Header() {
   const [ open, setOpen] = useState(false);
   const { deleteItem } = useLocalStorage("auth-token");
   const [ state, dispatch ] = useContext(AuthContext);
   const redirect = useNavigate();
   const { isAuthenticated, showHide } = useContext(EcomContext);

   const logout = (e) => {
      e.preventDefault();
      dispatch({ type: "setToken", payload: null})
      deleteItem(null);
      redirect("/login");
      showHide("success", "You are now logged out!...")
   }
  return (
      <> 
         <div className='bg-[#502274] text-[#fff] sticky top-0 z-[20] flex justify-between items-center py-[15px] px-[30px] header'>      
            <div className="flex-1">
               <a href="">
                  <h1 className='text-left text-[#fff]'>STAR STORES</h1>
               </a>
            </div>
             {/* First Navigation */}
            <nav className=" hidden lg:flex space-x-4 text-white text-[16px] navbar">
               <Link to="">Home</Link>
               <Link to="/about">About</Link>
               <Link to="/product">Products</Link>
               {isAuthenticated ? (<>
                  <Link onClick={logout}>Logout</Link>
               <Link to="/cart" className='relative'><i className="fa-solid fa-cart-shopping"></i>
               <div className='absolute bottom-4 left-4 text-white bg-blue-950 text-center rounded-full h-6 w-6 text-[15px]'>
                  4
               </div>
               </Link>
               </>) : (<>
                  <Link to="/login">Login</Link>
                  <Link to="/sign">Sign up</Link>
               </>)} 
            </nav>
            {/* First Nav done */}
            <button 
              type="button"
              className="flex justify-end lg:hidden items-center w-[35px] h-[35px]"
              onClick={() => setOpen(!open)}
            >
               <i class="fa-solid fa-bars"></i>
            </button>
            {/* Second Nav (Mobile) */}
            <div className={`fixed lg:hidden top-0 left-0 w-[300px] h-screen overflow-auto bg-[red] z-[30] transition-transform duration-200 ${open ? "translate-x-0" : "-translate-x-full"}`}>
               {/* XMark for closing */}
               <button className='absolute top-5 right-5 text-3xl text-black'
               onClick={() => setOpen(!open)}>
                  <i className="fa-solid fa-xmark"></i>
               </button>
               <nav onClick={() => setOpen(open)} className='flex flex-col gap-5 text-center text-black pt-20 px-10 text-[25px]'>
                  <Link to="">Home</Link>
                  <Link to="">About</Link>
                  <Link to="">Products</Link>
                  {isAuthenticated ? (<>
                     <Link onClick={logout}>Logout</Link>
                  <Link to="/cart"> <i className="fa-solid fa-cart-shopping"></i>
                  <div className='absolute bottom-4 left-4 text-white bg-blue-950 text-center rounded-full h-6 w-6 text-[15px]'>
                     4
                  </div>
                  </Link>
                  </>) : (<>
                     <Link to="">Login</Link>
                     <Link to="">SignUp</Link>
                  </>)}  
               </nav>
            </div>
            {/* Second Nav done */}
         </div>
      </>
  )
}

export default Header;

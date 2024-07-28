import React from 'react'
import { Link } from 'react-router-dom';


function SignUp() {
  return (
    <>
       <div className='mx-auto max-w-md bg-white display m-6 p-2 rounded bg-[#fff] signup'>
           <form  className="p-8"action="">
                <h5 className='text-center font-bold text-2xl pb-4 font-serif'>CREATE AN ACCOUNT</h5>
                <hr className='pb-4' />
              <div>
                <label htmlFor="">First Name*</label>
                <input type="text" name="" id="" placeholder='Enter First Name' />
              </div>
              <div>
                <label htmlFor="">Last Name*</label>
                <input type="text" name="" id="" placeholder='Enter Last Name' />
              </div>
              <div>
                <label htmlFor="">Email*</label>
                <input type="email" name="" id="" placeholder='Enter Email' />
              </div>
              <div>
                <label htmlFor="">Phone number*</label>
                <input type="tel" name="" id="" placeholder='Enter Phone Number' />
              </div>
            
              <div>
                <label htmlFor="">Password*</label>
                <input type="password" name="" id="" placeholder='Enter Password' />
              </div>
              <div className='text-center'>
                 <button className={"text-center text-white font-bold  bg-[#502274]  text-l hover:bg-gray-500 hover:text-black"} type="submit">Create an Account</button>
                 <p>By signing up you accept our terms and conditions
                 & privacy policy</p>
              </div>
              
               <hr />
              
              <div className='text-center account'>
                <h1 className='pt-4 text-gray-500 pb-4'>Already have an Account ?</h1>
                <Link to="/login" className='border-solid border-black  log' type="submit">Login</Link>
              </div>
           </form>
       </div>
    </>
  )
}

export default SignUp;

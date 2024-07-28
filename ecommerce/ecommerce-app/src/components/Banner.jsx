import React from 'react'
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <>
       <div>
           <div className="steph">
              <img src="/img/airmax.jpg" alt="" />
              <div className="like"></div>
              <div className="steph-container font-bold text-4xl uppercase text-[#fff]">
                  <h2>Welcome to STAR Stores</h2>
                  <h2>Luxury meets Perfection</h2>
                  <Link to="" className="">See Products</Link>
              </div>
           </div>
       </div>
    </>
  )
}

export default Banner;

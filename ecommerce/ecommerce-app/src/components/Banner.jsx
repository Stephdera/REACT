import React from 'react'
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <>
       <div>
           <div className="steph z-[0]">
              <img src="/img/airmax.jpg" alt="" />
              <div className="like"></div>
              <div className="steph-container font-bold text-4xl uppercase text-[#fff]">
                  <h2>Welcome to STAR Stores</h2>
                  <h2>Luxury meets Perfection</h2>
                  <Link to="" className="">
                  <button className="cta"><span className="hover-underline-animation"> Shop now </span>
                 <svg
                   id="arrow-horizontal"
                   xmlns="http://www.w3.org/2000/svg"                  
                   width="30"
                   height="10"
                   viewBox="0 0 46 16"
                 >
                 <path
                   id="Path_10"
                   data-name="Path 10"
                   d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                   transform="translate(30)"></path>
               </svg>
             </button>

                  </Link>
              </div>
           </div>
       </div>
    </>
  )
}

export default Banner;

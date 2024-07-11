import React from 'react'

function Button({children, className, type, disable}) {
  return (
    <div>
         <button className={`bg-[#000] ${className}`} type={type} disabled={disable}>
            {children}
         </button>
    </div>
  )
}

export default Button;

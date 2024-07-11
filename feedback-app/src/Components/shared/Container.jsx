import React from 'react'

function Container({children, className}) {
  return (
      <div className={`container max-w-3xl mx-auto ${className}`}>
        {children} 
      </div>
  )
}

export default Container;

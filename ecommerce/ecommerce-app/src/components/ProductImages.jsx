import React from 'react'

function ProductImages({ images, setSelectedImages}) {
    
  return (
    <div className='grid mt-12 grid-cols-3 gap-2'>
        {images?.map((prodImg, index) => (
            <div key={index}>
                <img src={`http://localhost:3000/${prodImg.img}`}
                onClick={() => setSelectedImages(prodImg.img)}
                className='w-full object-cover h-full cursor-pointer' alt={`Product ${index}`}/>
            </div>
        ))}
    </div>
  )
}

export default ProductImages;

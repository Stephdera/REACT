import React from 'react'

function ProductCheckOut() {
  return (
    <div>
         <div className='container max-w-6xl p-3 mx-auto my-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 shadow-xl'>
                 <div className='p-3 table'>
                    <h1 className='text-start text-xl font-bold border-b pb-3'>Order Summary</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Product Image</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Product 1</td>
                                <td className='flex align-center justify-center'>
                                    <img src="/img/red nike.jpg" width="50px" alt="" />
                                </td>
                                <td>67</td>
                                <td>#647675</td>
                            </tr>
                            <tr>
                                <td>Product 2</td>
                                <td className='flex align-center justify-center'>
                                    <img src="/img/red sneakers.jpg" width="50px" alt="" />
                                </td>
                                <td>60</td>
                                <td>#647670</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className=''>Total: # 4657.098</td>
                            </tr>
                        </tbody>
                    </table>
                 </div>

                 <div>
                     <div className="cform">
                        <h1 className='text-end text-xl font-bold border-b pb-3'>Delivery Details</h1>
                        <form action="">
                            <div>
                                <label htmlFor="">Full Name</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div>
                                <label htmlFor="">Email Address</label>
                                <input type="email" name="" id="" />
                            </div>
                            <div>
                                <label htmlFor="">Phone Number</label>
                                <input type="tel" name="" id="" />
                            </div>
                            <div>
                                <label htmlFor="">Address</label>
                                <input type="text" name="" id="" />
                                <input type="hidden" name="" id="" />
                            </div>
                            <div>
                                <button className='product-btn p-2 w-full text-[#fff] rounded capitalize bg-[#502274] hover:bg-[#A42CD6]' type="submit">PAY</button>
                            </div>
                        </form>
                     </div>
                 </div>
            </div>
         </div>
    </div>
  )
}

export default ProductCheckOut;

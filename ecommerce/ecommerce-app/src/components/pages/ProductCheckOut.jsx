import React, { useContext } from 'react'
import EcomContext from '../../context/EcomContext';

function ProductCheckOut() {
    const { cartItems, calculateTotalAmount } = useContext(EcomContext);
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
                            {cartItems.map((items, index) => (
                                <tr key={index}>
                                <td>{items.name}</td>
                                <td className='flex align-center justify-center'>
                                    <img src={items.img} width="50px" alt="" />
                                </td>
                                <td>{items.quantity}</td>
                                <td>#{items.amount}</td>
                            </tr>
                            ))}
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
                                <td className=''>Total: #{calculateTotalAmount().toFixed(2)}</td>
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

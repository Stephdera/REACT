import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import EcomContext from '../../context/EcomContext';

function ProductCart() {
    const { cartItems, calculateSubTotal, calculateVat, calculateTotalAmount, removeCartItems, updateCartItems } = useContext(EcomContext);
  return (
    <div className='cart'>
        <div className="container max-w-5xl mx-auto my-24">
            <div className='grid grid-cols-1'>
                 <div className="p-3 table shadow-l">
                        <table>
                            <thead>
                                 <th>Name</th>
                                 <th>Product Image</th>
                                 <th>Price</th>
                                 <th>Amount</th>
                                 <th>Quantity</th>
                                 <th>Remove</th>
                            </thead>
                            <tbody>
                                {cartItems.map((items, index) => (
                                    <tr key={index}>
                                    <td>{items.name}</td>
                                    <td className='flex align-center justify-center'><img src={items.img} width="50px" alt="" /></td>
                                    <td>${items.price}</td>
                                    <td>${items.amount.toFixed(2)}</td>
                                    <td>
                                        <input type="number" onChange={(e) => updateCartItems(items.id, e.target.value)} min={1} value={items.quantity} id="" />
                                    </td>
                                    <td>
                                        <button type="submit" onClick={() => removeCartItems(items.id)}><i class="fa-solid fa-xmark"></i></button>
                                    </td>
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
                                    <td className=''>Subtotal: ${calculateSubTotal().toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className=''>VAT (7.5%): ${calculateVat().toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className=''>Total: ${calculateTotalAmount().toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className=''><Link to="/checkout" className='product-btn p-2 text-[#fff] rounded capitalize bg-[#502274] hover:bg-[#A42CD6]'>Checkout</Link></td>
                                </tr>
                            </tbody>
                         </table>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCart;

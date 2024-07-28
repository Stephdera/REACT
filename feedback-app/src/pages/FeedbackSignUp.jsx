import React from 'react'
import Card from '../Components/shared/Card';
import Button from '../Components/shared/Button';

function FeedbackSignUp() {
  return (
    <>
       <Card className={"sign ml-64 mr-64 mt-12 bg-white"}>
       <form  className="p-8"action="">
               <h5 className='text-center font-bold text-3xl pb-6 font-serif'>SIGNUP PAGE</h5>
            <div>
                <label htmlFor="">First Name*</label>
                <input type="text" name="" id="" />
            </div>
            <div>
                <label htmlFor="">Last Name*</label>
                <input type="text" name="" id="" />
            </div>
            <div>
                <label htmlFor="">Email*</label>
                <input type="email" name="" id="" />
            </div>
            <div>
                <label htmlFor="">Phone number*</label>
                <input type="tel" name="" id="" />
            </div>
            
            <div>
                <label htmlFor="">Address*</label>
                <input type="text" name="" id="" />
            </div>
            <div>
                 <Button className={"text-center text-blue-600 font-semi-bold p-4 rounded-full text-l hover:bg-gray-500 hover:text-white"} type="submit">SignUp</Button>
            </div>
         </form>
       </Card>
    </>
  )
}

export default FeedbackSignUp;

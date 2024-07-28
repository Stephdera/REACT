import React from 'react'
import Card from '../Components/shared/Card';
import Button from '../Components/shared/Button';

function FeedbackContact() {
  return (
    <>
        <h5 className='text-center mt-8 mb-8 font-bold text-4xl font-serif text-orange-600 '>Don't Hesitate to Contact Us</h5>
       <div className='contact flex grid grid-cols-2'> 
          <Card className='bg-red-400 ml-32'>
             <form action="">
                <h5 className='text-center font-bold text-xl'>GET IN TOUCH</h5>
                <div>
                     <input type="text" placeholder="Full Name"/>
                </div>
                <div>
                    <input type="email" name="" id="" placeholder='Email' />
                </div>
                <div>
                    <input type="tel" name="" id=""placeholder='Phone number' />
                </div>
                <div>
                    <textarea name="" id="" placeholder='Enter Message'></textarea>
                </div>
                <div>
                    <Button className={"p-4 text-orange-500 hover:bg-gray-500 hover:text-white"} type="submit">Send Message</Button>
                </div>
             </form>
          </Card>
          <div>
             <Card className={"space-y-6 pl-16 mr-24 mt-24"} >
                 <h1 className='text-center font-bold text-green-500 text-2xl'>INFORMATION</h1>
                 <div className='flex space-x-8'>
                 <i class="fa-solid fa-location-dot"></i>
                    <div>
                        <h5>Address</h5>
                        <p>56 Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                 </div>
                 <div className='flex space-x-8'>
                   <i class="fa-solid fa-phone"></i>
                    <div>
                        <h5>Fax</h5>
                        <p>090877665555</p>
                        <p>+1449765256</p>
                    </div>
                 </div>
                 <div className='flex space-x-8'>
                 <i class="fa-solid fa-envelope"></i>
                    <div>
                       <h5>Email</h5>
                       <p>sales@gmail.com</p>
                       <p>info@gmail.com</p>
                    </div>
                 </div>
             </Card>
          </div>
       </div>
    </>
  )
}

export default FeedbackContact;

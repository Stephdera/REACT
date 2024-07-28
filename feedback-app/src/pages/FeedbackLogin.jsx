import React, { useState } from 'react'
import Button from '../Components/shared/Button';
import Card from '../Components/shared/Card';


function FeedbackLogin() {
    const[password, setPassword] = useState("");
    const[message, setMessage] =useState("");
    const[btnDisabled, setBtnDisabled] =useState(true);
    const[ShowPassword, setShowPassword] = useState("");

    const validatePassword = (e) => {
        if (password === "") {
            setBtnDisabled(true);
            setMessage("Enter your password");
        }  else if (password !== "" && password.trim().length < 8) {
            setBtnDisabled(true);
            setMessage("Your Password must be atleast 8 letters");
        }else {
            setBtnDisabled(false)
            setMessage("Valid Password")
        }
        setPassword(e.target.value)
        e.preventDefault();
    }

      const togglePassword =() => {
        if(password === ""){
            setShowPassword("")
        }else {
            setShowPassword("")
        }
      }
  return (
    <>
        <Card className={"mx-auto max-w-md bg-white"}>
            <div>
                <form className="cform ml-8 mr-8" action="">
                    <h5 className='text-center p-8 font-bold text-3xl'>LOGIN PAGE</h5>
                    <div className='user'>
                        <label htmlFor="text">Username: </label>
                        <input type="text" />
                    </div>
                    <div className='password mb-8'>
                        <label htmlFor="password">Password: </label>
                        <input  value={password} onChange={validatePassword} type="password" />
                        <div className='mt-4'>
                        <label htmlFor="checkbox">Show Password</label>
                        <input type="checkbox" value={ShowPassword} onClick={togglePassword}/>
                        </div>
                        {message && <p>{message}</p>}
                    </div>
                    
                    <div className='flex'>
                    <Button disable={btnDisabled}  className=" bg-[D1BCE3] text-center capitalize p-3 rounded-xl text-[lime] hover:bg-zinc-500 hover:text-black" >Login</Button>
                    <h5 className='text-green-400 ml-36 mt-2'>Forgot Password ?</h5>
                    </div>
                </form>
            </div>
        </Card>
    </>
  )
}


export default FeedbackLogin;

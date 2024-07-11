import React from 'react'
import Button from '../Components/shared/Button';
import Card from '../Components/shared/Card';
import { Link } from "react-router-dom"

function FeedbackLogin() {
  return (
    <>
        <Card className={"mx-auto max-w-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"}>
            <div>
                <form className="cform" action="">
                    <div className='user'>
                        <label htmlFor="text">Username:</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className='password'>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="" id="" />
                    </div>
                    <Button className="bg-[D1BCE3] text-center capitalize p-3 mt-3 rounded-xl text-[lime]" >Login</Button>
                </form>
            </div>
        </Card>
    </>
  )
}

export default FeedbackLogin;

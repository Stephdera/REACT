import React, { useEffect }  from 'react'
import Container from './shared/Container';
import Card from './shared/Card';
import FeedbackStats from './FeedbackStats';
import Button from './shared/Button';
import SelectRated from './SelectRated';
import { useState } from 'react';



function FeedbackForm({ feedbackform_prop, addFeedbackHandler, updateFeedbackHandler, editFeedback }) {
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState(5);
    const [message, setMessage] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);

    useEffect(() => {
        if (editFeedback.edit === true) {
            setBtnDisabled(false)
            setRating(editFeedback.items.rating)
            setDescription(editFeedback.items.description)
        }}, [editFeedback]
    )

    const inputChangeHandler = (e) => {
        if(description === "") {
            setBtnDisabled(true);
            setMessage("Please input your feedback");
        } else if (description !== null && description.trim().length < 8) {
            setBtnDisabled(true);
            setMessage("You need at least 8 characters")
        }else{
            setBtnDisabled(false)
            setMessage("")
        }
        setDescription(e.target.value)
        // console.log(e.target.value);
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        console.log("submitted");
        if (description.trim().length > 8) {
            const newFeedback = {
                rating: rating,
                description: description
            }
            if (editFeedback.edit === true) {
                updateFeedbackHandler(editFeedback.items.id, newFeedback)
            }else{
                addFeedbackHandler(newFeedback)
            }
    
            setDescription("");
            console.log(newFeedback);
        }
        e.preventDefault()
    }
  return (
    <div>
          <Container className={"grid grid-cols-1 md:grid-cols-3 justify-center align-center"}>
                 <div className='col-span-2'>
                    <Card className={"cform"}>
                         <h3 className='mb-3'>How do you rate yourself in class?</h3>
                         <SelectRated editFeedback={editFeedback} selectedRating_prop={(rating)=> setRating(rating)}/>
                         <form onSubmit={handleSubmit}>
                            <input type="text" value={description} onChange={inputChangeHandler} placeholder='Enter Feedback'/>
                            {message && <p>{message}</p>}
                            <Button disable={btnDisabled} className="bg-[D1BCE3] text-center capitalize p-3 mt-3 rounded-xl text-[lime] hover:bg-[#0056] ">
                                  Submit
                            </Button>
                         </form>
                    </Card>
                 </div>
                 <div>
                    <FeedbackStats Feedbackstats_prop={feedbackform_prop}/>
                 </div>
          </Container>
    </div>
  )
}

export default FeedbackForm;

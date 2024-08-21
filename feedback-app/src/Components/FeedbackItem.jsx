import React, { useContext } from 'react';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ feedbackitem_prop }) {
    const {deleteFeedbackHandler, editFeedbackHandler} = useContext(FeedbackContext);
  return (
    <>
        <Card>
            <div>
                <div className='flex justify-between gap-3'>
                    <div className='rating bg-red-500 h-8 w-8 flex align-center justify-center text-center rounded-full'>
                        {feedbackitem_prop.rating}
                        </div>
                        <div className='flex gap-3 font-bold'>
                        <button type="button" onClick={() => deleteFeedbackHandler(feedbackitem_prop.id)} ><i className="fa-solid fa-xmark"></i></button>
                        <button type="button" onClick={() => editFeedbackHandler(feedbackitem_prop)}><i className="fa-solid fa-pen-to-square"></i></button>
                    </div>
                </div>
                <div className='p-3 text-feedback'>
                    {feedbackitem_prop.description}
                </div>
            </div>
        </Card>
        
    </>
  )
}

export default FeedbackItem;

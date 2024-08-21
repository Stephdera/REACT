import React, { useContext } from 'react'
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
    const { feedback } = useContext(FeedbackContext);
    let avgRating = feedback.reduce((acc, curr) => {
         return acc + curr.rating 
    },0) / feedback.length;
  return (
    <div>
          <Card>
              <h1 className='font-bold text-xl uppercase font-serif'>FeedbackStats</h1>
              <h1>Average Rating: {isNaN(avgRating) ? 0 : avgRating} </h1>
              <h1>Total Feedback: {feedback.length} </h1>
          </Card>
    </div>
  )
}

export default FeedbackStats;

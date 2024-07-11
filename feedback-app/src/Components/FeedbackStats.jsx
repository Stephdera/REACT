import React from 'react'
import Card from './shared/Card';

function FeedbackStats({Feedbackstats_prop}) {
    let avgRating = Feedbackstats_prop.reduce((acc, curr) => {
         return acc + curr.rating 
    },0) / Feedbackstats_prop.length;
  return (
    <div>
          <Card>
              <h1 className='font-bold text-xl uppercase font-serif'>FeedbackStats</h1>
              <h1>Average Rating: {isNaN(avgRating) ? 0 : avgRating} </h1>
              <h1>Total Feedback: {Feedbackstats_prop.length} </h1>
          </Card>
    </div>
  )
}

export default FeedbackStats;

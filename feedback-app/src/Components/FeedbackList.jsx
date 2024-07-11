

import React from 'react'
import Container from './shared/Container'
import FeedbackItem from './FeedbackItem'
import Card from './shared/Card'

function FeedbackList({feedbacklist_prop, deleteFeedbackHandler, editFeedbackHandler}) {
  if (!feedbacklist_prop || feedbacklist_prop.length === 0 ) {
    return (
        <Container>
              <Card>
                   <p className='text-center'>No feedback!!...</p>
              </Card>
        </Container>
    )
  }
  return (
    <>
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
            { feedbacklist_prop.map((items, index)=> (
                <FeedbackItem 
                  key={index} 
                  feedbackitem_prop={items} 
                  editFeedbackHandler={editFeedbackHandler} 
                  deleteFeedbackHandler={deleteFeedbackHandler}
              />
            ))}
        </Container>
    </>
  )
}

export default FeedbackList;

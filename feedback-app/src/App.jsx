import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackLogin from "./pages/FeedbackLogin";
import AboutPage from "./pages/AboutPage";



function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [editFeedback, setEditFeedback] = useState({
    items: {},
    edit: false
  });
    

  //  add feedback
  const addFeedbackHandler = (newFeedback) => {
    newFeedback.id = feedback.length + 1;
    setFeedback([newFeedback, ...feedback])
  }

  // delete Feedback
  const deleteFeedbackHandler = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((feedback) => feedback.id !== id))
    }
  }

    // set object to be updated
    const editFeedbackHandler = (items) => { 
      setEditFeedback({
        edit: true,
        items,
      }

      )}
    //  update feedback object
    const updateFeedbackHandler = (id, updItems) => {
        setFeedback(feedback.map((items) => items.id === id ? {...items, ...updItems}: items))
    }  


  return (
    <>
       <Router>
       <Header/>
       <Routes>
        <Route path="/" element={
          <>
               <FeedbackForm 
        editFeedback={editFeedback} 
        feedbackform_prop={feedback} 
        updateFeedbackHandler={updateFeedbackHandler} 
        addFeedbackHandler={addFeedbackHandler} 
      />
      <FeedbackList 
        editFeedbackHandler={editFeedbackHandler} 
        feedbacklist_prop={feedback} 
        deleteFeedbackHandler={deleteFeedbackHandler} 
      />
          </>
        } />

       <Route path="/about" element={<AboutPage/>}/>
       <Route path="/login" element={<FeedbackLogin/>}/>

       </Routes>
       </Router>
      
    </>
  )
}

export default App;








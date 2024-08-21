import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackLogin from "./pages/FeedbackLogin";
import AboutPage from "./pages/AboutPage";
import FeedbackSignUp from "./pages/FeedbackSignUp";
import FeedbackContact from "./pages/FeedbackContact";
import { FeedbackProvider } from "./context/FeedbackContext";


function App() {
 
    //  update feedback object
    // const updateFeedbackHandler = (id, updItems) => {
    //     setFeedback(feedback.map((items) => items.id === id ? {...items, ...updItems}: items))
    // }  


  return (
    <>
      <FeedbackProvider>
       <Router>
       <Header/>
       <Routes>
        <Route path="/" element={
          <>
            <FeedbackForm />
            <FeedbackList />
          </>
        } />

       <Route path="/about" element={<AboutPage/>}/>
       <Route path="/login" element={<FeedbackLogin/>}/>
       <Route path="/signup" element={<FeedbackSignUp/>} />
       <Route path="/contact" element={<FeedbackContact/>}/>

       </Routes>
       </Router>
       
      </FeedbackProvider>
    </>
  )
}

export default App;








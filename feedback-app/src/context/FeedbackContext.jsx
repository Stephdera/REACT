import React, {createContext} from "react";
import { useState } from "react";
import { useEffect } from "react";

const FeedbackContext = createContext()


export const FeedbackProvider = ({ children}) => {
    
    const [feedback, setFeedback] = useState([]);
    const [editFeedback, setEditFeedback] =useState({
        items: {},
        edit: false,
    });


      useEffect(() => {
        fetchData()
      }, []);


    const fetchData = async () => {
        try {
          const response = await fetch ("http://localhost:3000/feedback");
          const data = await response.json();
        setFeedback(data);
        } catch (error) {
          console.log(error);  
        }
    }

    // useEffect(() => {
    //     fetch("http//localhost:3000/feedback")
    //     .then(response => response.json())
    //     .then(feedback => setFeedback(feedback))
    // }, []);

   
    // add feedback
    const addFeedbackHandler = async (newFeedback) => {
        const res = await fetch ("http://localhost:3000/feedback", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(newFeedback)
        })
        const data = await res.json();
        setFeedback([data, ...feedback]);
    }


    // delete feedback
    const deleteFeedbackHandler = async(id) => {
     const res = await fetch(`http://localhost:3000/feedback/${id}`,{
        method: "DELETE",
     })
     if(window.confirm("Are you sure you want to delete this feedback!...")){
        setFeedback(feedback.filter((feedback) => feedback.id !==id ))}
    }

    // set object to be updated
    const editFeedbackHandler = (items) => {
        setEditFeedback({
            items,
            edit:true,
        })
    };

    // update feedback

    const updateFeedbackHandler = async (id, newupdate) => {
        const response = await fetch("http://localhost:3000/feedback",{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newupdate)
        })
        setFeedback(feedback.map((items) => items.id === id ? {...items, ...newupdate} : items));
    };


    return (
        <FeedbackContext.Provider value= {{
            feedback,
            editFeedback,
            addFeedbackHandler,
            deleteFeedbackHandler,
            editFeedbackHandler,
            updateFeedbackHandler,
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}




export default FeedbackContext;
import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    
    function handleChange(event){
        const{name, value} = event.target;
        setNote(previousNote => {
            return {
              ...previousNote, 
              [name]: value
            };
                
        });
        
    }
    // will pass this function when the onclick gets triggered
    function submitNote(event){
      props.onAdd(note);  // => pass it to App

      
      //clearing the fields on the noteArea
      // and as long as we have value inside the <input> it should reflect the state of the notes
      setNote({ title: "", content: ""}); 
      // the event will help stop the refreshing of the screen 
      // which happens if a button is inside a form
      // the preventDefault() will stop that
      event.preventDefault();
    }
    


   
  return (
    <div>
      <form>
        <input 
          value={note.title} 
          onChange={handleChange} 
          name="title" 
          placeholder="Title" 
          
        />
        <textarea 
          value={note.content} 
          onChange={handleChange} 
          name="content" 
          placeholder="Take a note...."
          rows="3" 

         />
         {/* button inside forms
         when ever you click on a button inside a form the default behavior is to refresh the page
           */}
        <button onClick={submitNote} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

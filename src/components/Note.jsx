import React from "react";
import { isPropertyAccessOrQualifiedName } from "typescript";

function Note(props){
    
    function handleClick(){
        props.onDelete(props.id); //this will pick up the id we created when making the notes
    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            
            {/* want to trigger a function inside the app.jsx */}
            <button onClick={handleClick}>DELETE</button>
        </div>
    );
}

export default Note;
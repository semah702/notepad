import React from "react";

import Note from "../Note/Note";

import "./NoteContainer.css";

function NoteContainer(props) { // create NoteContainer function
  const reverArray = (arr) => { // create reverArray function
    const array = []; // create array

    for (let i = arr.length - 1; i >= 0; --i) { // create for loop
      array.push(arr[i]); 
    }

    return array; 
  };

  const notes = reverArray(props.notes); 

  return (
    <div className="note-container"> 
      <h2>Notes</h2> 
      <div className="note-container_notes custom-scroll"> 
        {notes?.length > 0 ? ( // create if statement
          notes.map((item) => ( 
            <Note
              key={item.id} 
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h3>No Notes present</h3> 
        )}
      </div>
    </div>
  );
}

export default NoteContainer;
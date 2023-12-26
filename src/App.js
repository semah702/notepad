import React, { useEffect, useState } from "react"; // import useState

import NoteContainer from "./components/NoteContainer/NoteContainer";
import Sidebar from "./components/Sidebar/Sidebar";

import "./App.css";

function App() { // create App function
  const [notes, setNotes] = useState( // create useState
    JSON.parse(localStorage.getItem("notes-app")) || [] // create JSON.parse
  );

  const addNote = (color) => { // create addNote function
    const tempNotes = [...notes]; // create tempNotes

    tempNotes.push({ // create tempNotes.push
      id: Date.now() + "" + Math.floor(Math.random() * 78), // create id
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => { // create deleteNote function
    const tempNotes = [...notes]; // create tempNotes

    const index = tempNotes.findIndex((item) => item.id === id); // create index
    if (index < 0) return; // create if statement

    tempNotes.splice(index, 1); // create splice
    setNotes(tempNotes); // create setNotes
  };

  const updateText = (text, id) => { // create updateText function
    const tempNotes = [...notes]; // create tempNotes

    const index = tempNotes.findIndex((item) => item.id === id); // create index
    if (index < 0) return; // create if statement

    tempNotes[index].text = text; // create tempNotes[index].text
    setNotes(tempNotes); // create setNotes
  };

  useEffect(() => { // create useEffect
    localStorage.setItem("notes-app", JSON.stringify(notes)); // create localStorage.setItem
  }, [notes]);

  return ( // create return
    <div className="App"> 
      <Sidebar addNote={addNote} /> 
      <NoteContainer // create NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}

export default App; // export App

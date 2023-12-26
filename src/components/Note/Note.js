import React from "react";

import deleteIcon from "../../assets/delete.svg";

import "./Note.css";

let timer = 500, // timer to set the time for the debounce function
  timeout; // timeout to set the timeout for the debounce function
function Note(props) { // create Note function
  const formatDate = (value) => { // create formatDate function
    if (!value) return ""; // create if statement

    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hrs = date.getHours(); // create hrs
    let amPm = hrs >= 12 ? "PM" : "AM";  // create amPm
    hrs = hrs ? hrs : "12"; // create hrs
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs; 

    let min = date.getMinutes(); // create min
    min = min < 10 ? "0" + min : min;

    let day = date.getDate(); // create day
    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${month}`; // return
  };

  const debounce = (func) => { // create debounce function
    clearTimeout(timeout); // create clearTimeout
    timeout = setTimeout(func, timer); // create timeout
  };

  const updateText = (text, id) => { // create updateText function
    debounce(() => props.updateText(text, id)); // create debounce
  };

  return ( // create return
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea 
        className="note_text"
        defaultValue={props.note.text} 
        onChange={(event) => updateText(event.target.value, props.note.id)} // create onChange
      />
      <div className="note_footer">
        <p>{formatDate(props.note.time)}</p> 
        <img
          src={deleteIcon}
          alt="DELETE"
          onClick={() => props.deleteNote(props.note.id)} // create onClick
        />
      </div>
    </div>
  );
}

export default Note; 
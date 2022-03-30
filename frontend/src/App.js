import React from 'react'
import { useState } from 'react';
import TextField from '@mui/material/TextField';

function App() {

  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')

  function sendFName(event){
    event.preventDefault()
    event.target.reset()
    handleSubmit({fName})
  }

  async function handleSubmit(body) {
    const response = await fetch('/get-last-name',{
      'method':'POST',
      headers : {
      'Content-Type':'application/json'
    },
    body:JSON.stringify(body)
    })
    const json = await response.json();
    setLName(json)
  }

  return (
    <div className="App">
      <form onSubmit={sendFName}>
        <label for="fname">First name: </label>
        <TextField 
          id="outlined-basic"
          variant="outlined" 
          onChange={(e)=>setFName(e.target.value)}
        />
        <button type='submit'>Submit</button>
        <p>Last name: {lName}</p>
      </form>
    </div>
  );
}

export default App;

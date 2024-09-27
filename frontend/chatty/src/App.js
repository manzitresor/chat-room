import './App.css';
import io from "socket.io-client"
import { nanoid }  from "nanoid";
import { useState,useEffect } from 'react'

const socket = io.connect('http://localhost:5000/')

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom ] = useState('');

  function joinRoom(event){
    event.preventDefault()
    if( username !== '' && room !== '') {
      socket.emit('join_room',room)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1> Join A Chat</h1>
        <form onSubmit={joinRoom}> 
          <input 
              type='text' 
              placeholder='my name is john....'
              onChange={(event)=> {
                setUsername(event.target.value)
          }}></input>
          <input 
              type='text' 
              placeholder='Room Id...'
              onChange={(event)=> setRoom(event.target.value)}
            ></input>
          <button>Join Room</button>
        </form>
      </header>
    </div>
  );
}

export default App;

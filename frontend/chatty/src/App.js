import './App.css';
import io from "socket.io-client"
import { useState } from 'react'
import Chat from './Chat';

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
    <div className="App-header">
      <header>
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
      <Chat socket={socket} username={username} room={room} />
    </div>
  );
}

export default App;

import React from 'react'

export default function Chat({sockets, username, room}) {
  return (
    <div>
      <div>
        <p> Live Chat </p>
      </div>
      <div>
        <input type='text' placeholder='Hey...'></input>
        <button>&#9658;</button>
      </div>
    </div>
  )
}

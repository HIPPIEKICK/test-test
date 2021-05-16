import React, { useEffect, useState } from "react"
import { TestWhereby } from "./TestWhereby"
import { Link } from "react-router-dom"


export const RoomsList = () => {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    fetch('https://test-test-backend.herokuapp.com/rooms', { method: 'GET' })
      .then(res => res.json())
      .then(json => setRooms(json))
  }, [])

  return (
    rooms.map(room => (
        <div key={room.id}>
          <p>Room: {room.id}</p>
          <p>numClients: {room.numClients}</p>
          <Link to={`/rooms/${room.id}`}>{room.roomName}</Link>
   
      
          {/* <TestWhereby key={room.id} room={room}/> */}
      </div>
    ))
    
)
}
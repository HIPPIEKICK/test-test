import React, { useEffect, useState } from "react"
import { TestWhereby } from "./TestWhereby"


export const RoomsList = () => {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    fetch('https://test-test-backend.herokuapp.com/rooms', { method: 'GET' })
      .then(res => res.json())
      .then(json => setRooms(json))
  }, [])

  return (
    rooms.map(room => (
      <TestWhereby key={room.id} room={room}/>
    ))
    
)
}
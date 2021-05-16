import React, { useEffect, useState } from "react"
import { Iframe } from "./Iframe"
import { useParams, Link } from "react-router-dom"


export const TestWhereby = () => {
  const { id } = useParams()
  const [room, setRoom] = useState('')

  useEffect(() => {
    fetch(`https://test-test-backend.herokuapp.com/rooms/${id}`, { method: 'GET' })
      .then(res => res.json())
      .then(json => setRoom(json))
  }, [id])

  return (
    <>
      <Link to={"/"}> 🔙</Link>
      <p>Room: {id}</p>
      <p>Name: {room.roomName}</p>
      <p>Clients: {room.numClients}</p>
      <Iframe src={room.roomName}/>
    </>
)
}
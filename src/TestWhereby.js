import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Iframe } from "./Iframe"

export const TestWhereby = () => {
  const { id } = useParams()
  const [room, setRoom] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`https://test-test-backend.herokuapp.com/rooms/${id}`, { method: 'GET' })
        .then(res => res.json())
        .then(json => {
          setRoom(json)
          console.log(Date.now())
        })
    }, 10000);
    return () => clearInterval(interval);
  }, [id]);

  return (
    <>
      <Link to={"/"}> 🔙</Link>
      <p>Room: {id}</p>
      <p>Name: {room.roomName}</p>
      <p>{room.numClients}></p>
      <Iframe src={room.roomName}/>
    </>
)
}
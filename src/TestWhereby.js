import React from "react"
import { Iframe } from "./Iframe"


export const TestWhereby = (room) => {
  console.log(room)
  return (
    <>
    <p>Room: {room.room.id}</p>
    <p>Name: {room.room.roomName}</p>
    <p>Clients: {room.room.numClients}</p>
      <Iframe src={room.room.roomName}
      />
    </>
)
}
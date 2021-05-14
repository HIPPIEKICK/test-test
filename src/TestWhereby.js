import React from "react"

const fetch = require("node-fetch");

// const API_KEY = "YOUR_API_KEY";

const data = {
  startDate: "2021-05-14T13:57:00.000Z",
  endDate: "2021-05-15T13:56:00.000Z",
  fields: ["hostRoomUrl"],
};

function getResponse() {
    return fetch("https://api.whereby.dev/v1/meetings", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

getResponse().then(async res => {
    console.log("Status code:", res.status);
    const data = await res.json();
    console.log("Room URL:", data.roomUrl);
    console.log("Host room URL:", data.hostRoomUrl);
});

export const TestWhereby = () => {
  return (
    <iframe
      src="https://technigo-test-nkjt.whereby.com/room?embed"
      allow="camera; microphone; fullscreen; speaker; display-capture"
    ></iframe>
)
}
import React from "react"

export const Iframe = (source) => {
  const videoURL = `https://technigo-test-nkjt.whereby.com${source.src}?embed?audio=off?screenshare=off`

  return (
      <iframe
        src={videoURL}
        allow="camera; microphone; fullscreen; speaker; display-capture"
      ></iframe>
)
}
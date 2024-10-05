"use client"
import React from 'react';

export default function VideoComponent({ url }: { url: string }) {
  return (
    <>
      <video
        className="video"
        loop
        playsInline
        aria-label="Product demo video"
        autoPlay // Optional: Auto-play the video
        muted // Optional: Mute the video
        style={{ pointerEvents: 'none' }} // Disable pointer events
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <style jsx>{`
        .video {
          width: 100%; // Set your desired width
          height: auto; // Maintain aspect ratio
        }
        video::-webkit-media-controls {
          display: none !important; // Hide controls in webkit browsers
        }
        video::-moz-controls {
          display: none !important; // Hide controls in Firefox
        }
      `}</style>
    </>
  );
}

import React from 'react';

function AudioPlayer({ fileName }) {
  const audioSrc = `http://localhost:3039/audio/${fileName}`;

  return (
    <div>
      <audio controls>
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioPlayer;
import React, { useEffect } from 'react'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder'
import './style.css'



function Contributor () {

  const recorderControls = useAudioRecorder()

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
    audio.remove();
  };

  return (
    <>

   
      <div className='contributor-container'>
      <div className='box'>
        <h2>Start Recording</h2>
      <AudioRecorder 
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
        
        audioTrackConstraints={{
          noiseSuppression:true,
          echoCancellation:true
        }}
        downloadOnSavePress={true}
        downloadFileExtension='webm'
        showVisualizer={true}
       
      />
      </div>
      </div>
    </>
    
  )
}

export default Contributor

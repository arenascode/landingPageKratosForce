import { useRef, useState } from "react";
import "./video.scss"

const Video = () => {

  const videoRef = useRef(null)
  const progressRef = useRef(null)
  const [play, setPlay] = useState(false)

  // const player = document.querySelector('.player')
  
  const handlePlay = (e) => {
    e.preventDefault()
    // const video = document.querySelector('.playerVideo')
    if (videoRef.current) {
      
      if (!play) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
      setPlay(!play)

      
    } 
    console.log(videoRef.current.ended);
  }


  const handleProgress = () => {
    const percent = (videoRef.current.currentTime / videoRef.current.duration) * 100
    console.log(percent);
    progressRef.current.style.flexBasis = `${percent}%`
    console.log(videoRef.current.ended);
    if (videoRef.current.ended) {
      setPlay(false);
    }
  }

  return (
    <div id="videoContainer" className="player">
      <video ref={videoRef} onClick={handlePlay} onTimeUpdate={handleProgress} muted
        className="playerVideo"
        src="src/assets/video/promoVideoMorralKf45.mp4"
      ></video>
      <div className="playerControls">
        <div className="progress">
          <div ref={progressRef} className="progressFilled"></div>
        </div>
        <button
          className="playerButton"
          title="Toggle Play"
          onClick={handlePlay}
        >
          {play ? "❚ ❚" : "►"}
        </button>
      </div>
      <div className="btnContainer"></div>
    </div>
  );
}
export default Video
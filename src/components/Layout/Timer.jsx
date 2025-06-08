import Lottie from "lottie-react";
import timerAnim from "../../assets/timer.json";
import { useState, useEffect, useRef } from "react";
import timeUpAlarm from '../../assets/alarm.mp3';

function Timer({noOfQues, onTimeUp }){

    const [showPopup, setShowPopup] = useState(false);
    const audioRef = useRef(null);

    const totalTime = noOfQues * 60;
    const [timer, setTimer] = useState(totalTime);
    console.log("Total time ", totalTime);
    console.log("No of question in quiz,", noOfQues);

    useEffect(()=>{
        if(timer === 0){
            onTimeUp();
            return;
        }

        const interval = setInterval(()=>{
            setTimer(prev => prev - 1);
        },1000);

        return () => clearInterval(interval);

    })

    useEffect(()=>{
        if(timer === 60){
            const audio = new Audio(timeUpAlarm);
            audio.loop = true;
            audio.play();
            audioRef.current = audio;
            setShowPopup(true);
        }
    },[timer]);

    const handleClosePopup = () =>{
        setShowPopup(false);
        if(audioRef.current){
             audioRef.current.pause();
            audioRef.current.currentTime = 0; 
        }
    }


  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <>
  <div className="flex items-center gap-3  text-black font-semibold text-base rounded-lg w-fit">
    <Lottie
      animationData={timerAnim}
      loop
      style={{ width: "30px", height: "30px" }}
    />
    <p className="m-0">{formatTime(timer)}</p>
  </div>

     {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-xl text-center max-w-sm w-full">
            <h2 className="text-lg font-semibold text-red-600 mb-2">⏰ 1 Minute Remaining!</h2>
            <p className="text-gray-700 mb-4">Hurry up and finish your quiz. Time is almost up!</p>
            <button
              onClick={handleClosePopup}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      </>
);

}
export default Timer;
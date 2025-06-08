import Lottie from "lottie-react";
import timerAnim from "../../assets/timer.json";
import { useState, useEffect } from "react";

function Timer({noOfQues, onTimeUp }){

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


  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
  <div className="flex items-center gap-3  text-black font-semibold text-base rounded-lg w-fit">
    <Lottie
      animationData={timerAnim}
      loop
      style={{ width: "30px", height: "30px" }}
    />
    <p className="m-0">{formatTime(timer)}</p>
  </div>
);

}
export default Timer;
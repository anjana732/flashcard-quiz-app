import Lottie from "lottie-react";
import timer from "../../assets/timer.json"

function Timer(){
    return(
        <> 
            <Lottie animationData={timer} 
                loop
                style={{ width: "30px", height: "30px", backgroundColor: "#1f2937" }}/>
            <p>01:00</p>
        </>
    )
}
export default Timer;
import { useLocation } from "react-router-dom";

function AchievementPage(){
     
    const location = useLocation()
    const score = location.state.score

    return(
        <>
            <p style={{backgroundColor: "white"}}>{score}</p>
        </>
    )
}

export default AchievementPage;
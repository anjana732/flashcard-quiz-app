import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import confetti from "canvas-confetti";

function AchievementPage() {
  const location = useLocation();
  const score = location.state?.score ?? 0;
  const maxScore = location.state.noOfques * 10;

  const percentage = (score / maxScore) * 100;
  console.log("percentage: ",percentage);

  useEffect(() => {
    confetti({
      particleCount: 300,
      spread: 100,
      origin: { y: 0.9 }
    });
  }, []);

  return (
    <>
        {percentage >= 75 &&  <div style={{ backgroundColor: "white", textAlign: "center", padding: "2rem" }}>
      <h1>Congratulations! 🎉</h1>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Your Score: {score}</p>
    </div>}
    {percentage >= 35 && <div style={{ backgroundColor: "white", textAlign: "center", padding: "2rem" }}>
      <h1> Good Job! 😎 </h1>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Your Score: {score}</p>
    </div>}
    {percentage < 35 && <div style={{ backgroundColor: "white", textAlign: "center", padding: "2rem" }}>
      <h1> Keep Trying ... All the best ! 👍 </h1>
      
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Your Score: {score}</p>
    </div>}
    </>
    
  );
}

export default AchievementPage;

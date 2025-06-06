import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import confetti from "canvas-confetti";

function AchievementPage() {
  const location = useLocation();
  const score = location.state?.score ?? 0;

  useEffect(() => {
    confetti({
      particleCount: 300,
      spread: 100,
      origin: { y: 0.9 }
    });
  }, []);

  return (
    <div style={{ backgroundColor: "white", textAlign: "center", padding: "2rem" }}>
      <h1>🎉 Congratulations! 🎉</h1>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Your Score: {score}</p>
    </div>
  );
}

export default AchievementPage;

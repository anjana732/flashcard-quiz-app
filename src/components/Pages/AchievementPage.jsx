import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import confetti from "canvas-confetti";

// Animations
import achieverAnim from "../../assets/eightyper.json";
import firstAnim from "../../assets/GoldMedal.json";
import failAnim from "../../assets/Failed.json";

function AchievementPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score ?? 0;
  const totalQuestions = location.state?.noOfques ?? 0;
  const maxScore = totalQuestions * 10;
  const percentage = totalQuestions ? (score / maxScore) * 100 : 0;

  useEffect(() => {
    if (percentage >= 75) {
      confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
    } else if (percentage >= 35) {
      confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
    }
  }, [percentage]);

  const getContent = () => {
    if (percentage >= 75) {
      return {
        title: "🌟 Top Performer!",
        message: "You’ve nailed it! Keep going strong.",
        anim: achieverAnim,
        color: "#1e3c72",
        bg: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)"
      };
    } else if (percentage >= 35) {
      return {
        title: "👍 Good Job!",
        message: "Nice effort! You’re on the right path.",
        anim: firstAnim,
        color: "#2c3e50",
        bg: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
      };
    } else {
      return {
        title: "🙌 Don't Give Up!",
        message: "Every failure is a step to success.",
        anim: failAnim,
        color: "#4b4b4b",
        bg: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)"
      };
    }
  };

  const { title, message, anim, color, bg } = getContent();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: bg,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        textAlign: "center",
        color: color,
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem", fontWeight: 700 }}>
        {title}
      </h1>

      <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>{message}</p>

      <Lottie
        animationData={anim}
        loop
        style={{ width: "300px", height: "300px", marginBottom: "1.5rem" }}
      />

      <p style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>
        Score: <strong>{score}</strong> / <strong>{maxScore}</strong>
      </p>
      <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
        Accuracy: {percentage.toFixed(2)}%
      </p>

      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "2rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#2c3e50",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Go to Home
      </button>
    </div>
  );
}

export default AchievementPage;

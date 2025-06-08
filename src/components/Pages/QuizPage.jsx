import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Question from '../UI/Question';
import Button from '../UI/Button';
import Timer from '../Layout/Timer';
import loadingAnim from '../../assets/loading.json';
import Lottie from 'lottie-react';


function QuizPage() {
  const location = useLocation();
  const amount = location.state.amount;
  const category = location.state.category;
  const difficulty = location.state.difficulty.toLowerCase();
  const navigate = useNavigate()
 
  const [ques, setQues] = useState([]);
  const [loading, setLoading] = useState(true);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchQuestion = async () => {
      try {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
        );
        const data = await response.json();
        console.log(data.results);
        setQues(data.results);
        setLoading(false);
      } catch (err) {
        console.error('API error:', err);
        setLoading(false);
      }
    };

    fetchQuestion();
  }, [amount, category, difficulty]);

  function handleQuizSubmit() {
    console.log("Quiz submitted");
    let score = 0;
    for (let [_, isCorrect] of resultMap) {
      score += isCorrect ? 10 : -1;
    }
    console.log("Final Score:", score);
    navigate("/achievement",{
      state: {
        score: score,
        noOfques: amount
      }
    }
    )

  }

  const resultMap = new Map();
  function handleAnswerSubmit({ questionNo, evaluation }) {

    console.log("Printing from quiz page", questionNo, evaluation);

    console.log(ques);

    resultMap.set(questionNo, evaluation);
    console.log("Result Map : ", resultMap);

  }

  const handleTimeUp = () => {
    handleQuizSubmit();
  }

  if (loading) {
  return (
    <div className="flex justify-center items-center h-screen bg-[#f3f4f6]">
      <div className="flex flex-col items-center">
        <Lottie animationData={loadingAnim} style={{ width: 100 }} loop />
        <p className="text-xl mt-4">Loading Questions...</p>
      </div>
    </div>
  );
}

return (
  <>
 
    <div className="bg-[#1f2937] min-h-screen">
      {ques.length > 0 && (
        <>
          <div className="w-full bg-[#F0DFBC] px-6 py-3 flex justify-end border-b border-gray-300 shadow-sm">
            <Timer noOfQues={ques.length} onTimeUp={handleTimeUp} />
          </div>
          <div className="px-6 py-8 space-y-6">
            {ques.map((que, index) => (
              <Question
                key={index}
                quesNo={index + 1}
                question={que.question}
                correctAns={que.correct_answer}
                incorrectAns={que.incorrect_answers}
                getAnswer={handleAnswerSubmit}
              />
            ))}
          </div>
          <div className="flex justify-center py-4">
            <Button text="Submit" onButtonClick={handleQuizSubmit} />
          </div>
        </>
      )}
    </div>

  </>
);


}

export default QuizPage;

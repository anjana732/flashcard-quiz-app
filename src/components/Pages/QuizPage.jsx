import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Question from '../UI/Question';

function QuizPage() {
  const location = useLocation();
  const amount = location.state.amount;
  const category = location.state.category;
  const difficulty = location.state.difficulty.toLowerCase();

  const [ques, setQues] = useState([]);
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
      } catch (err) {
        console.error('API error:', err);
      }
    };

    fetchQuestion();
  }, [amount, category, difficulty]);

  return (
    <>
      {ques.length > 0 &&
        ques.map((que, index) => (
         <Question key={index} quesNo={index+1} question={que.question} correctAns={que.correct_answer} incorrectAns={que.incorrect_answers} />
        ))}
    </>
  );
}

export default QuizPage;

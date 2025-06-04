import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
        setQues(data.results); // ✅ Set state
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
          <p key={index}>{que.question}</p> // ✅ Assuming you want the question text
        ))}
    </>
  );
}

export default QuizPage;

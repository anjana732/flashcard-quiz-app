import Popup from '../../components/UI/Popup'
import { useLocation } from 'react-router-dom';

function QuizPage(){

    const location = useLocation();
    console.log(location.state);
    const amount = location.state.amount;
    const category = location.state.category;
    const difficulty = location.state.difficulty;

    const fetchQuestion = async () => {
        try {
          const response = await fetch('https://opentdb.com/api.php?amount=10&category=Politics&difficulty=Easy&type=multiple');
      
          if (response.status === 429) {
            console.warn('Rate limited. Trying again in 5 seconds...');
            setTimeout(fetchQuestion, 5000);
            return;
          }
      
          const data = await response.json();
          console.log(data);
        } catch (err) {
          console.error('API error:', err);
        }
      };
      
     fetchQuestion(amount,category,difficulty);

    return(
        <>
         
        </>
    )
}

export default QuizPage;
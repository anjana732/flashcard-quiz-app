import Button from './Button';
import fetchHint from '../../api/hintApi.js'
import { useState } from 'react';

function Question({quesNo, question, correctAns, incorrectAns, getAnswer }) {

  const [showPopup, setShowPopup] = useState(false);
  const [hint, setHint] = useState("");

  const randomIndex = Math.floor(Math.random() * 4);
  const options = [...incorrectAns];
  options.splice(randomIndex, 0, correctAns);

  async function  handleHintClick() {
    console.log("Hint clicked!");
    const response = await fetchHint(question);
    console.log(response);
    setHint(response);
    setShowPopup(true);

  }

  function handleSeclect(e){
    const ans = e.target.value;
    let value = ans === correctAns
    getAnswer({questionNo: quesNo, evaluation: value})
    console.log(ans);
  }

  function handleClosePopup(){
    setShowPopup(false);
  }

  return (
    <>
    <div className="w-full px-10 py-3 bg-[#1f2937] text-white font-sans">
  
      <div className="flex items-center justify-between gap-6 mb-4">
        <p className="w-[90%] text-lg font-medium leading-snug tracking-wide">{quesNo}. 
          {question}
        </p>
        <div className="w-[10%] min-w-fit">
          <Button text="Hint" onButtonClick={handleHintClick} />
        </div>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((ansItem, index) => (
          <label
            key={index}
            className="flex items-center gap-3 p-3 bg-[#374151] hover:bg-[#4b5563] rounded-md border border-gray-500 transition duration-200 cursor-pointer"
          >
            <input
              type="radio"
              name={`answer-${quesNo}`}
              value={ansItem}
              className="form-radio w-5 h-5 accent-indigo-500"
              onChange={handleSeclect}
            />
            <span className="text-base">{ansItem}</span>
          </label>
        ))}
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-xl text-center max-w-sm w-full">
            <h2 className="text-lg font-semibold text-red-600 mb-2">⏰ 1 Minute Remaining!</h2>
            <p className="text-gray-700 mb-4">{hint}</p>
            <button
              onClick={handleClosePopup}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
      
    </div>
    
    </>
  );
}

export default Question;

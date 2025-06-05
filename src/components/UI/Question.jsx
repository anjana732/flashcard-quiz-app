import Button from './Button';

function Question({quesNo, question, correctAns, incorrectAns }) {
  const randomIndex = Math.floor(Math.random() * 4);
  const options = [...incorrectAns];
  options.splice(randomIndex, 0, correctAns);

  function handleHintClick() {
    console.log("Hint clicked!");
  }



  return (
    <div className="w-full px-10 py-3 bg-[#1f2937] text-white font-sans">
      {/* Question + Hint */}
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
              name="answer"
              value={ansItem}
              className="form-radio w-5 h-5 accent-indigo-500"
            />
            <span className="text-base">{ansItem}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Question;

import { IoMdClose } from "react-icons/io"; 
import Button from "./Button";

export default function Popup({ ques, onNextButtonClick, onClose }) {

  // function onButtonClick(){
  //   handleNextButtonClick
  // }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-[#1e1e2f] text-white w-full max-w-md rounded-xl shadow-xl p-6 relative">
        
        
      
          <button
            className="absolute top-3 right-3 text-gray-400 hover:text-red-400 text-2xl"
            onClick={onClose}
          >
            <IoMdClose />
          </button>
        

        
        <p className="text-lg sm:text-xl font-medium mb-6 text-center">{ques.Ques}</p>
        <div className="flex justify-center">
          <Button text="Next" onButtonClick={onNextButtonClick} />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { IoMdClose } from "react-icons/io"; // close icon (optional)
import Button from "./Button"; // assuming you have a reusable Button component

export default function Popup({ ques, onNextButtonClick, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-[#1e1e2f] text-white w-full max-w-md rounded-xl shadow-xl p-6 relative">
        
        {/* Close Button (optional) */}
        {onClose && (
          <button
            className="absolute top-3 right-3 text-gray-400 hover:text-red-400 text-2xl"
            onClick={onClose}
          >
            <IoMdClose />
          </button>
        )}

        {/* Question Text */}
        <p className="text-lg sm:text-xl font-medium mb-6 text-center">{ques}</p>

        {/* Next Button */}
        <div className="flex justify-center">
          <Button text="Next" onClick={onNextButtonClick} />
        </div>
      </div>
    </div>
  );
}

// function RedenderStepCircle({noOfStep}){
//     const [step, setStep] = useState(1);
//     const isCompleted = step > noOfStep;
//     const isActive = step === noOfStep;
//     return(
//         <>
//             return (
//       <div className="relative flex items-center">
//         <div
//           className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-300 
//             ${isCompleted ? 'bg-green-500' : isActive ? 'bg-green-600' : 'bg-gray-300'}`}
//         >
//           {isCompleted ? <Check size={20} /> : noOfStep}
//         </div>
//         {noOfStep !== 3 && (
//           <div
//             className={`flex-1 h-1 transition-all duration-300 
//               ${step > noOfStep ? 'bg-green-500' : 'bg-gray-300'}`}
//           />
//         )}
//       </div>
//     );
//         </>
//     )

// }

// export default RedenderStepCircle;
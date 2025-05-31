import {
    ClockIcon,
    LightBulbIcon,
    PlayIcon,
    ClipboardDocumentListIcon,
    TrophyIcon,
  } from '@heroicons/react/24/outline';
  
  export default function Instructions() {
    return (
     <section className=" text-gray-100 ">
        <div className="max-w-8xxl w-full">
          <div className="bg-gray-800  p-10 shadow-2xl">
            <h2 className="text-4xl font-bold text-center text-indigo-400 mb-10">
              🧠 How to Play the Quiz Game
            </h2>
  
            <div className="space-y-6 text-lg leading-relaxed">
              <div className="flex items-start gap-4">
                <PlayIcon className="h-7 w-7 text-indigo-400 mt-1" />
                <p>
                  Click on <span className="font-semibold text-indigo-300">Play</span> to begin your quiz journey.
                </p>
              </div>
  
              <div className="flex items-start gap-4">
                <ClipboardDocumentListIcon className="h-7 w-7 text-green-400 mt-1" />
                <p>
                  Choose a <span className="font-semibold text-green-300">Category</span>, number of questions, and difficulty level to customize your challenge.
                </p>
              </div>
  
              <div className="flex items-start gap-4">
                <ClockIcon className="h-7 w-7 text-yellow-400 mt-1" />
                <p>
                  Each quiz is timed. Submit answers before the timer runs out. If not, the quiz will be <span className="underline text-yellow-300">auto-submitted</span>.
                </p>
              </div>
  
              <div className="flex items-start gap-4">
                <LightBulbIcon className="h-7 w-7 text-purple-400 mt-1" />
                <p>
                  Need help? Click the <span className="font-semibold text-purple-300">Hint</span> button to get a clue (popup will appear).
                </p>
              </div>
  
              <div className="flex items-start gap-4">
                <TrophyIcon className="h-7 w-7 text-pink-400 mt-1" />
                <p>
                  After completion, your score will be calculated instantly. Aim to beat your high score!
                </p>
              </div>
            </div>
  
            {/* <div className="mt-12 text-center">
              <p className="text-gray-300">Ready to test your knowledge?</p>
              <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                Let’s Play!
              </button>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
  
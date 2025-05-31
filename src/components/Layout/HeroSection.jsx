import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

function HeroSection() {

    const navigate = useNavigate();

    function handlePlayButton(){
        navigate("/quiz")
    }
    return (
        <section className="relative min-h-100 bg-gray-900 text-white overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1668037381925-f5762cdbc1ae?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20 z-0"
                aria-hidden="true"
            />

            {/* Overlay content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto gap-12">
                {/* Left Column (75%) */}
                <div className="lg:w-3/4 space-y-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white">
                        Welcome to the Ultimate Quiz Challenge!
                    </h1>
                    <p className="text-lg text-gray-200 max-w-2xl">
                        Test your knowledge with our interactive flashcard quiz. Choose a category, flip the cards, and learn something new every day. Whether you're prepping for exams or just love trivia, this is your game!
                    </p>
                    <Button text="Play" onButtonClick={handlePlayButton}/>
                </div>

                {/* Right Column (25%) */}
                <div className="lg:w-1/4 w-full flex justify-center">
                    {/* Replace with Lottie animation or GIF */}
                    <img
                        src="https://cdn.dribbble.com/userupload/17007075/file/original-b726dc8ee1fb14ca4a6db8efc73dd586.gif"
                        alt="Quiz Animation"
                        className="w-[200px] h-[200px] rounded-xl shadow-lg mr-4 object-contain"
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
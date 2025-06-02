import Footer from "../Layout/Footer";
import HeroSection from "../Layout/HeroSection";
import NavBar from "../Layout/NavBar";
import Rules from "../Layout/Instructions";
import Feedback from "../Layout/Feedback";
import ScoreEvaluation from "../Layout/ScoreEvaluation";
import { useState } from "react";
import Popup from "../UI/Popup";
import { useNavigate } from "react-router-dom";

function LandingPage(){

    const navigate = useNavigate()

    const popupQuestion = [
        {
            QuesNo :1,
            Ques : "Please Select No. of question",
            type: "text",
            name: "noOfQuestion"
        },
        {
            QuesNo :2,
            Ques : "Please Select category of Quiz",
            type: "dropdown",
            name: "category",
            option:  [
                "General Knowledge",
                "Entertainment: Books",
                "Entertainment: Film",
                "Entertainment: Music",
                "Entertainment: Musicals & Theatres",
                "Entertainment: Television",
                "Entertainment: Video Games",
                "Entertainment: Board Games",
                "Science & Nature",
                "Science: Computers",
                "Science: Mathematics",
                "Mythology",
                "Sports",
                "Geography",
                "History",
                "Politics",
                "Art",
                "Celebrities",
                "Animals",
                "Vehicles",
                "Entertainment: Comics",
                "Science: Gadgets",
                "Entertainment: Japanese Anime & Manga",
                "Entertainment: Cartoon & Animations"
            ]
        },
        {
            QuesNo :3,
            Ques : "Please Select difficulty of Quiz",
            type: "dropdown",
            name: "difficulty",
            option: ["Easy","Medium","Hard"]
        },

    ]

    const[isPopupOpen, setIsPopupOpen] = useState(false);
    const[stepIndex , setStepIndex] = useState(0);

    function handlePlayButtonClick(){
        setIsPopupOpen(true);
    }

    function handlePopClose(){
        setIsPopupOpen(false);
    }

    const handleNextButtonClick = () => {
        console.log("next button clicked");
        if(stepIndex < popupQuestion.length -1 ){
            setStepIndex(stepIndex + 1);
        }else{
            setIsPopupOpen(false);
            navigate("/quiz");
        }
    }

    return(
        <>
            <NavBar/>
            <HeroSection onPlayButtonClick={handlePlayButtonClick}/>
            <Rules/>
            <ScoreEvaluation/>
            <Feedback/>
            <Footer/>
            {isPopupOpen && 
                <Popup ques={popupQuestion[stepIndex]} onNextButtonClick={handleNextButtonClick} onClose={handlePopClose} />
            }
           
        </>
    )
}

export default LandingPage;
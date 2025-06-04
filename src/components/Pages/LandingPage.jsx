import Footer from "../Layout/Footer";
import HeroSection from "../Layout/HeroSection";
import NavBar from "../Layout/NavBar";
import Rules from "../Layout/Instructions";
import Feedback from "../Layout/Feedback";
import ScoreEvaluation from "../Layout/ScoreEvaluation";
import { useState } from "react";
import Popup from "../UI/Popup";
import { useNavigate } from "react-router-dom";
import DynamicInput from "../UI/DynamicInput";

function LandingPage(){

    const navigate = useNavigate();
    const [formData, setFormData] = useState({});

    const popupQuestion = [
        {
            QuesNo :1,
            Ques : "Please Select No. of question",
            type: "text",
            name: "amount"
        },
        {
            QuesNo :2,
            Ques : "Please Select category of Quiz",
            type: "dropdown",
            name: "category",
            option:  [
                "Select Option",
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
            option: ["Select Option","Easy","Medium","Hard"]
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
            // const searchParams = new URLSearchParams(formData).toString();
            navigate("/quiz?",{
                state : {
                    amount: formData.amount,
                    category : formData.category,
                    difficulty : formData.difficulty
                }
            });
        }
    }

    function handleChange(e){
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
          }));
        
          console.log("printing formData:.........", {
            ...formData,
            [name]: value
          });
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
                <Popup ques={popupQuestion[stepIndex]} 
                onNextButtonClick={handleNextButtonClick} 
                onClose={handlePopClose} 
                inputComponent={<DynamicInput
                    config={popupQuestion[stepIndex]}
                    value={formData[popupQuestion[stepIndex].name] || ""}
                    onChange={handleChange}
                  />} />
            }
           
        </>
    )
}

export default LandingPage;
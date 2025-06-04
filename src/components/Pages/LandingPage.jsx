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
            option : [
                { "id": "", "value": "Select Option" },
                { "id": 9, "value": "General Knowledge" },
                { "id": 10, "value": "Entertainment: Books" },
                { "id": 11, "value": "Entertainment: Film" },
                { "id": 12, "value": "Entertainment: Music" },
                { "id": 13, "value": "Entertainment: Musicals & Theatres" },
                { "id": 14, "value": "Entertainment: Television" },
                { "id": 15, "value": "Entertainment: Video Games" },
                { "id": 16, "value": "Entertainment: Board Games" },
                { "id": 17, "value": "Science & Nature" },
                { "id": 18, "value": "Science: Computers" },
                { "id": 19, "value": "Science: Mathematics" },
                { "id": 20, "value": "Mythology" },
                { "id": 21, "value": "Sports" },
                { "id": 22, "value": "Geography" },
                { "id": 23, "value": "History" },
                { "id": 24, "value": "Politics" },
                { "id": 25, "value": "Art" },
                { "id": 26, "value": "Celebrities" },
                { "id": 27, "value": "Animals" },
                { "id": 28, "value": "Vehicles" },
                { "id": 29, "value": "Entertainment: Comics" },
                { "id": 30, "value": "Science: Gadgets" },
                { "id": 31, "value": "Entertainment: Japanese Anime & Manga" },
                { "id": 32, "value": "Entertainment: Cartoon & Animations" }
            ]
              
        },
        {
            QuesNo :3,
            Ques : "Please Select difficulty of Quiz",
            type: "dropdown",
            name: "difficulty",
            option: [
                        {id: 0, "value": "Select Option" },
                        {id: 1, "value":"Easy" }, 
                        {id: 2, "value": "Medium"},
                        {id: 3, "value": "Hard"},
                    ]
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

    let difficulty;
    if(formData.difficulty === "1"){
        difficulty = "easy"
    }else if(formData.difficulty === "2"){
        difficulty = "medium"
    }else{
        difficulty = "hard"
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
                    difficulty : difficulty
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
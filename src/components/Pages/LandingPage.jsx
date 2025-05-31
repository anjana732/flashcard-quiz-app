import Footer from "../Layout/Footer";
import HeroSection from "../Layout/HeroSection";
import NavBar from "../Layout/NavBar";
import Rules from "../Layout/Instructions";
import Feedback from "../Layout/Feedback";
import ScoreEvaluation from "../Layout/ScoreEvaluation";

function LandingPage(){
    return(
        <>
            <NavBar/>
            <HeroSection/>
            <Rules/>
            <ScoreEvaluation/>
            <Feedback/>
            <Footer/>
        </>
    )
}

export default LandingPage;
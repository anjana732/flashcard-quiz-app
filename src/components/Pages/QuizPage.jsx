import Popup from '../../components/UI/Popup'

function QuizPage(){
    async function fetchQuestion(amount, category, difficulty){
        let url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
        try
        {
            let response = await fetch(url);
            if(!response.ok) throw new Error("Http Error");
            const data = await response.json();
            console.log(data);
        }catch(err){
            console.log(`Error fetching data ${err}`)
        }     
    }

     fetchQuestion();

    return(
        <>
         <Popup ques="vhgvgjj jhbgh"/>
        </>
    )
}

export default QuizPage;
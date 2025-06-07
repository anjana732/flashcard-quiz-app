import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const fetchHint = async (question)=>{
    try{
        const response =  await axios.post(`${BASE_URL}/api/hint`,{question});
        return  response.data.hint;
    }catch(err){
        console.log("Error fetching data", err);
        return "Sorry ! No hint available";
    }
   
}

export default fetchHint;
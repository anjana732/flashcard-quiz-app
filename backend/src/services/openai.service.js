import { openai } from "../config/openai.config";

const  getHint = async (question)=> {
    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            {role: "system", content: "You are a helpful assistant" },
            {role: "user", content:`Give a hint for ${question}`}
        ],
        temperature: 0.5,
        max_tokens: 60
    })

    return response.choices[0].message.content?.trim() || "No hint available" ;
}

export default getHint;
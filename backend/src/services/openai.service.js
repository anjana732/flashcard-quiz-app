import axios from "axios";

const getHint = async (question) => {
  const response = await axios.post(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      model: "llama3-8b-8192",
      messages: [
        { role: "system", content: "You are a helpful assistant" },
        { role: "user", content: `Give a hint for ${question}` },
      ],
      temperature: 0.5,
      max_tokens: 60,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

 
    return response.data.choices[0].message.content.trim();
};

export default getHint;

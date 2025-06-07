import getHint from "../services/openai.service.js";

const generateHint = async (req, res) => {
  try {
    const { question } = req.body;
    const hint = await getHint(question);
    res.status(200).json({ hint });
  } catch (err) {
    console.log("error fetching hint", err);
    res.status(500).json({ err: "Failed to generate hint" });
  }
};

export default generateHint;

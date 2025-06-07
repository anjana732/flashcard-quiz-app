import getHint from "../services/openai.service";

const generateHint = async (req, res) => {
  try {
    const { qusetion } = req.body;
    const hint = await getHint(qusetion);
    res.status(200).json({ hint });
  } catch (err) {
    console.log("error fetching hint", err);
    res.status(500).json({ err: "Failed to generate hint" });
  }
};

export default generateHint;

export default function handler(req, res) {
  try {
    res.status(200).json({ message: "Hello" });
  } catch (error) {
    res.status(500).json({ error: "An internal server error occurred." });
  }
}

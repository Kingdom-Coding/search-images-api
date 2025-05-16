import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.get("/pixabay", async (req, res) => {
  const apiKey = "32591549-e248c23c0d9507b50877eabd8";
  const query = req.query.q;
  if (!query) return res.status(400).json({ error: "missing query param" });
  const url = `http://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
    query
  )}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("request received" + query);
    res.json(data);
  } catch (error) {
    console.error("Error fetching pixabay: ", error);
    res.status(500).json({ error: "Failed to fetch from pixabay" });
  }
});

app.listen(3000, () =>
  console.log("server is running at http://localhost:3000")
);

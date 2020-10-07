import express from "express";
import path from "path";
const app = express();
const port = 3000;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "public", "app1")));
app.use(express.static(path.join(__dirname, "public", "app2")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "app1", "index.html"));
});

app.get("/two", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "app2", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

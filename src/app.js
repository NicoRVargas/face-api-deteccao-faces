import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import faceApiRouter from "./routes/faceApiRouter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.static(path.join(__dirname, "..", "public", "html")));
app.use(express.static(path.join(__dirname, "..", "public", "css")));
app.use(express.static(path.join(__dirname, "..", "public", "js")));
app.use(express.static(path.join(__dirname, "..", "public", "img")));
app.use(express.static(path.join(__dirname, "..", "uploads")));
app.use(express.static(path.join(__dirname, "..", "output-image")));

app.use("/", faceApiRouter);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

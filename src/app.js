import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import faceApiRouter from "./routes/faceApiRouter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Porta definida no .env ou 3000 por padrão
const PORT = 3000;

// Middleware para parsear JSON e dados de formulário
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/", faceApiRouter);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// const express = require("express");
// const path = require("path");

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

// Exemplo de rota (pode ser substituído por um arquivo em routes/)
// app.get("/api/hello", (req, res) => {
//   res.json({ message: "Olá, mundo!" });
// });

// Rota principal para carregar o index.html (caso use HTML estático)
//TODO: Direcionar para página Index principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

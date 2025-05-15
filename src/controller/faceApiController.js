import { fileURLToPath } from "url";
import path from "path";
import { processImageFaceApi } from "../service/faceApiService.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const sendMainPage = (req, res) => {
    res.sendFile(path.join(__dirname, "../..", "public", "html/index.html"));
};

export const processImage = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "Nenhum arquivo enviado." });
    }

    console.log("Arquivo recebido:", req.file);

    const filename = req.file.filename;
    processImageFaceApi(filename)
        .then((result) => {
            console.log("Resultado do processamento:", result);
            res.status(200).json(result);
        })
        .catch((error) => {
            console.error("Erro ao processar imagem:", error);
            res.status(500).json({ error: "Erro ao processar imagem." });
        });
};

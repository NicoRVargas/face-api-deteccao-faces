import { fileURLToPath } from "url";
import path from "path";
import { processImageFaceApi } from "../service/faceApiService.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// export const criarUsuario = (req, res) => {
//   const novoUsuario = req.body;
//   // Aqui você incluiria lógica para salvar no banco de dados
//   res.status(201).json({ mensagem: "Usuário criado", dados: novoUsuario });
// };

export const sendMainPage = (req, res) => {
    res.sendFile(path.join(__dirname, "../..", "public", "html/index.html"));
};

export const processImage = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "Nenhum arquivo enviado." });
    }

    console.log("Arquivo recebido:", req.file);

    // res.json({
    //     message: "Imagem recebida com sucesso!",
    //     filename: req.file.filename,
    //     path: `/uploads/${req.file.filename}`,
    // });

    const filename = req.file.filename;
    // processImageFaceApi(filename)
    //     .then((result) => {
    //         console.log("Resultado do processamento:", result);
    //         res.status(200).json(result);
    //     })
    //     .catch((error) => {
    //         console.error("Erro ao processar imagem:", error);
    //         res.status(500).json({ error: "Erro ao processar imagem." });
    //     });
    return await processImageFaceApi(filename);
};

export const showResultPage = (req, res) => {
    if (!lastProcessedFilename) {
        return res.status(404).send("Nenhuma imagem processada.");
    }

    const imageUrl = `/output-image/${lastProcessedFilename}`;
    res.send(`
      <html>
        <head><title>Resultado</title></head>
        <body>
          <h1>Rosto Detectado</h1>
          <img src="${imageUrl}" alt="Imagem com rosto detectado" style="max-width: 100%; height: auto;" />
          <br><a href="/">Voltar</a>
        </body>
      </html>
    `);
};

import { fileURLToPath } from "url";
import path from "path";

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

export const processImage = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "Nenhum arquivo enviado." });
    }

    console.log("Arquivo recebido:", req.file);

    res.json({
        message: "Imagem recebida com sucesso!",
        filename: req.file.filename,
        path: `/uploads/${req.file.filename}`,
    });

    
};

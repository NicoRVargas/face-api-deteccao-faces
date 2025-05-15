import path from "path";
import { fileURLToPath } from "url";
import * as faceapi from "face-api.js";
import canvas from "canvas";
import fs from "fs";
import { loadModels } from "../../utils/faceApiSetup.js";

const { Canvas, Image, ImageData } = canvas;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function processImageFaceApi(filename) {
    const uploadsDir = path.join(__dirname, "..", "..", "uploads");
    const imagePath = path.join(uploadsDir, filename);
    const outputFilename = `output-${filename}`;
    const outputDir = path.join(__dirname, "..", "..", "output-image");
    const outputPath = path.join(outputDir, outputFilename);

    await loadModels();

    const img = await canvas.loadImage(imagePath);
    const canv = canvas.createCanvas(img.width, img.height);
    const ctx = canv.getContext("2d");
    ctx.drawImage(img, 0, 0);

    const detections = await faceapi.detectAllFaces(canv);
    const resizedDetections = faceapi.resizeResults(detections, {
        width: img.width,
        height: img.height,
    });

    faceapi.draw.drawDetections(canv, resizedDetections);

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const out = fs.createWriteStream(outputPath);
    const stream = canv.createPNGStream();
    await new Promise((resolve) => stream.pipe(out).on("finish", resolve));

    return {
        mensagem: "Imagem processada com sucesso.",
        quantidade_total_de_rostos_detectados: detections.length,
        imagem_original: `/${filename}`,
        imagem_alterada: `/${outputFilename}`,
    };
}

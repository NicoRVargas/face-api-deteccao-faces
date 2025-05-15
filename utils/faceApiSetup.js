import * as faceapi from "face-api.js";
import canvas from "canvas";
import path from "path";
import { fileURLToPath } from "url";

const { Canvas, Image, ImageData } = canvas;
faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MODEL_PATH = path.join(__dirname, "..", "/models");

export async function loadModels() {
    if (faceapi.nets.ssdMobilenetv1.isLoaded) return;

    await faceapi.nets.ssdMobilenetv1.loadFromDisk(MODEL_PATH);

    console.log("Modelo da FaceAPI carregados com sucesso!");
}

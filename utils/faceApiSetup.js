import * as faceapi from "face-api.js";
import canvas from "canvas";
import path from "path";
import { fileURLToPath } from "url";

// Para funcionar no Node.js com face-api.js
const { Canvas, Image, ImageData } = canvas;
faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

// Simula __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho para os modelos salvos localmente
const MODEL_PATH = path.join(__dirname, "..", "/models");

export async function loadModels() {
    //Evitar recarregamento desnecessário:
    if (faceapi.nets.ssdMobilenetv1.isLoaded) return;

    await faceapi.nets.ssdMobilenetv1.loadFromDisk(MODEL_PATH);

    console.log("Modelo da FaceAPI carregados com sucesso!");
}

import express from "express";
import { processImage, sendMainPage } from "../controller/faceApiController.js";
import path from "path";
import multer from "multer";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

const storage = multer.diskStorage({
    destination: path.join(__dirname, "..", "..", "uploads"),
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});

const upload = multer({ storage });

router.get("/", sendMainPage);

router.post("/upload", upload.single("image"), processImage);

export default router;

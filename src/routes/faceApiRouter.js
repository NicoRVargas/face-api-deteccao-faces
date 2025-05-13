// routes/usuarios.js

import express from "express";
import {
  listarUsuarios,
  criarUsuario,
} from "../controller/faceApiController.js";

const router = express.Router();

router.get("/", listarUsuarios); // GET /usuarios
router.post("/", criarUsuario); // POST /usuarios

export default router;

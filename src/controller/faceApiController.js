// controllers/usuarioController.js

export const listarUsuarios = (req, res) => {
  // Simulando dados
  const usuarios = [
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" },
  ];
  res.json(usuarios);
};

export const criarUsuario = (req, res) => {
  const novoUsuario = req.body;
  // Aqui você incluiria lógica para salvar no banco de dados
  res.status(201).json({ mensagem: "Usuário criado", dados: novoUsuario });
};

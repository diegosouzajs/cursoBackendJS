// app.js
const express = require("express");
const app = express();

app.use(express.json());

// "Banco" em memória
let usuarios = [];

/**
 * Classe base de erro da aplicação
 */
class AppError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

/**
 * GET - listar usuários
 */
app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

/**
 * POST - criar usuário
 */
app.post("/usuarios", (req, res) => {
    usuarios.push(req.body);
    res.status(201).json(req.body);
});

/**
 * PUT - atualizar usuário
 */
app.put("/usuarios/:id", (req, res, next) => {
    try {
        const id = parseInt(req.params.id);

        // valida índice
        if (isNaN(id) || id < 0 || id >= usuarios.length) {
            throw new AppError("Usuário não encontrado", 404);
        }

        usuarios[id] = req.body;

        res.json(req.body);
    } catch (err) {
        next(err);
    }
});

/**
 * DELETE - remover usuário
 */
app.delete("/usuarios/:id", (req, res, next) => {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id) || id < 0 || id >= usuarios.length) {
            throw new AppError("Usuário não encontrado", 404);
        }

        usuarios.splice(id, 1);

        res.status(204).send();
    } catch (err) {
        next(err);
    }
});

/**
 * Middleware de rota não encontrada (opcional, mas recomendado)
 */
app.use((req, res, next) => {
    next(new AppError("Rota não encontrada", 404));
});

/**
 * Middleware global de tratamento de erros
 */
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(err.status || 500).json({
        status: "erro",
        mensagem: err.message || "Erro interno do servidor"
    });
});

/**
 * Inicialização do servidor
 */
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
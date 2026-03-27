// app.js
const express = require("express");
const winston = require("winston");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

/**
 * Garantir que a pasta de logs exista
 */
const logDir = path.join(__dirname, "logs");
fs.mkdirSync(logDir, { recursive: true });

/**
 * Configuração do logger
 */
const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: path.join(logDir, "error.log"),
            level: "error"
        }),
        new winston.transports.File({
            filename: path.join(logDir, "combined.log")
        })
    ]
});

/**
 * Classe de erro customizada
 */
class AppError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

/**
 * "Banco" em memória
 */
let usuarios = [];

/**
 * GET - listar usuários
 */
app.get("/usuarios", (req, res) => {
    logger.info("Listando usuários");
    res.json(usuarios);
});

/**
 * POST - criar usuário
 */
app.post("/usuarios", (req, res) => {
    usuarios.push(req.body);
    logger.info("Usuário criado", { usuario: req.body });
    res.status(201).json(req.body);
});

/**
 * PUT - atualizar usuário
 */
app.put("/usuarios/:id", (req, res, next) => {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id) || id < 0 || id >= usuarios.length) {
            throw new AppError("Usuário não encontrado", 404);
        }

        usuarios[id] = req.body;

        logger.info("Usuário atualizado", { id, usuario: req.body });

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

        logger.info("Usuário removido", { id });

        res.status(204).send();

    } catch (err) {
        next(err);
    }
});

app.get("/erro", (req, res, next) => {
    try {
        throw new Error("Erro simulado de servidor");
    } catch (err) {
        next(err);
    }
});

/**
 * Middleware para rotas inexistentes
 */
app.use((req, res, next) => {
    next(new AppError("Rota não encontrada", 404));
});

/**
 * Middleware global de erro
 */
app.use((err, req, res, next) => {

    const status = err.status || 500;

    // registra no log
    logger.log({
        level: status >= 500 ? "error" : "warn",
        message: err.message,
        status: status,
        method: req.method,
        path: req.originalUrl,
        stack: err.stack
    });

    res.status(status).json({
        status: "erro",
        mensagem: status === 500
            ? "Erro interno do servidor"
            : err.message
    });
});

/**
 * Inicialização do servidor
 */
app.listen(3000, () => {
    logger.info("Servidor rodando em http://localhost:3000");
});
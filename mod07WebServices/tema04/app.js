const express = require("express");
const app = express();

app.use(express.json());

let usuarios = [];

// GET - listar usuários
app.get("/usuarios", (req,res)=>{
    res.json(usuarios);
});

// POST - criar usuário
app.post("/usuarios", (req,res)=>{
    usuarios.push(req.body)
    res.status(201).json(req.body)
});

// PUT - atualizar usuário
app.put("/usuarios/:id",(req,res)=>{
    const id = req.params.id
    usuarios[id] = req.body
    res.json(req.body)
});

// DELETE - remover usuário
app.delete("/usuarios/:id",(req,res)=>{
    const id = req.params.id
    usuarios.splice(id,1)
    res.status(204).send()
});

app.listen(3000);
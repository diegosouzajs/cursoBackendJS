const express = require('express');
const app = express();
const fs = require("fs");

// trabalhar com json
app.use(express.json());
app.set('views', './src/views');
app.set('view engine','ejs');

app.use(express.static("public"));

// Rotas
app.get('/', (req, res) => {
    res.redirect("/endereco");
});

app.get("/endereco", (req, res) => {
    res.render("endereco");
});

// Salvar contato
app.post("/salvar-endereco", (req, res) => {

    try{

        const novoEndereco = req.body

        let enderecos = []

        if(fs.existsSync("enderecos.json")){

            const dados = fs.readFileSync("enderecos.json","utf8")

            if(dados){
                enderecos = JSON.parse(dados)
            }

        }

        enderecos.push(novoEndereco)

        fs.writeFileSync(
            "enderecos.json",
            JSON.stringify(enderecos, null, 2)
        )

        res.json({
            status: "ok",
            mensagem: "Endereço salvo"
        })

    }catch(error){

        console.error(error)

        res.status(500).json({
            status: "erro",
            mensagem: "Falha ao salvar endereço"
        })

    }

})

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Servidor rodando em: ')
    console.log(`http://localhost:${PORT}`);
})
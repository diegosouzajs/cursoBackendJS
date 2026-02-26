const fs = require('fs').promises;
const path = require('path');
const logError = require('../logError');

async function lerJSON(arquivo, formato='utf-8'){
    
    try{
        const caminho = path.resolve(__dirname,'..','db', arquivo)
        
        // le o arquivo como text
        const dados = await fs.readFile(caminho, formato);

        // converte string JSON para objeto javascritp;
        const objeto = JSON.parse(dados);

        return objeto;
    } catch (e){
        logError(e, caminho);
    }
}

const arquivo = 'novasPessoas.json'

async function executa (arquivo){
    const pessoas = await lerJSON(arquivo);
    console.log(pessoas);
}

executa(arquivo);

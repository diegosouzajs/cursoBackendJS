const fs = require('fs').promises;
const path = require('path');
const Pessoa = require('../Pessoa');

async function sobrescreverJSON(caminho, objeto) {
    const formato = 'utf-8'
    try {
        if (!caminho || !objeto) {
            throw new Error('Caminho ou objeto não informado');
        }

        const caminhoCompleto = path.resolve(__dirname, '..','db', caminho);

        // Converter o objeto para o formato JSON 
        const jsonString = JSON.stringify(objeto, null, 2);
        //null -> sem função de transformação
        // 2 -> identação de espaços

        await fs.writeFile(caminhoCompleto, jsonString, formato);
        console.log('Arquivo JSON escrito com sucesso');

    } catch (e) {
        const logPath = path.resolve(__dirname, 'logs', 'error.log');
        const mensagemError = `
                [${new Date().toISOString()}]
                Caminho: ${caminho}
                Mensagem: ${e}
                Stack: ${e.stack}
                `
        await fs.appendFile(logPath, mensagemError, formato);
        console.error('Erro  registrado em error.log');

    }
}


const p1 = new Pessoa('Diego', 'Souza', 39);
const p2 = new Pessoa('Saul', 'Viana', 8);

const arquivo = 'pessoas.json'


async function executa (){
    await sobrescreverJSON(arquivo, p1)
    await sobrescreverJSON(arquivo, p2)
}

executa();
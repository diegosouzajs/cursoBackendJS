/* 
Basico do FileSystem em NodeJS
ler arquivo
escrever arquivos
ler diretório
ler arquivos de diretório

*/

// Como escrever um arquivo
const fs = require("fs");
const path = require("path");
const logError = require('../logError');
const readline = require('readline');


async function lerLinha(arquivo, formato = 'utf-8') {
    const caminho = path.resolve(__dirname, '..','arquivos', arquivo);
    try {
        const fileStream = fs.createReadStream(caminho);
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        for await (const linha of rl) {
            await delay(1000);
            console.log(linha)      
        }
    } catch (e) {
        logError(e, caminho, formato)
    }
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const arquivo = 'arquivo.txt'

lerLinha(arquivo);

// lendo linha por linha


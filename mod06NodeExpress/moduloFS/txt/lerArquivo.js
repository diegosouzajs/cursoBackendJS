const fs = require('fs').promises;
const path = require('path');
const logError = require('../tratamentoError/logError');

// sobrescreve o conteúdo do arquivo
async function lerArquivo(arquivo, formato='utf-8'){
    try{
        if(!arquivo){
            throw new Error('Arquivo ou caminho não especificado');
        }
        // . arquivo ou pasta no mesmo diretório
        // .. arquivo ou pasta em um diretório acima
        const caminho = path.resolve(__dirname,'..','db', arquivo);

        const conteudo = await fs.readFile(caminho, formato)
        console.log(conteudo)
    } catch (e){
        const fileName = 'lerArquivo.js'
        logError(e,fileName, arquivo);
    }
}

const arquivo = 'texto4 .txt';

lerArquivo(arquivo);

// // retorna o nome atual do repositório
// console.log(__dirname);
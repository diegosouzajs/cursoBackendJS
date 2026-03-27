const fs = require('fs').promises;
const path = require('path');
const logError = require('../tratamentoError/logError');

// sobrescreve o conteúdo do arquivo
async function escreverArquivo(arquivo, conteudo, formato='utf-8'){
    try{
        if(!arquivo || !conteudo){
            throw new Error('Arquivo ou caminho não especificado');
        }
        // . arquivo ou pasta no mesmo diretório
        // .. arquivo ou pasta em um diretório acima
        const diretorio = path.resolve(__dirname,'..','db', arquivo);

        await fs.appendFile(diretorio, conteudo +'\n', formato)
        console.log('Arquivo escrito com sucesso')
    } catch (e){
        logError(e, arquivo);
    }
}

const arquivo = 'texto2.txt';

async function executa(){
    await escreverArquivo(arquivo,'Primeira linha');
    await escreverArquivo(arquivo,'2ª linha');
}
executa();
// // retorna o nome atual do repositório
// console.log(__dirname);
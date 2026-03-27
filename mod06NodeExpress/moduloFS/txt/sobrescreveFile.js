const fs = require('fs').promises;
const path = require('path');
const logError = require('../tratamentoError/logError');

// sobrescreve o conteúdo do arquivo
async function sobrescreve(arquivo, conteudo, formato='utf-8'){
    try{
        if(!arquivo || !conteudo){
            throw new Error('Arquivo ou caminho não especificado');
        }
        // . arquivo ou pasta no mesmo diretório
        // .. arquivo ou pasta em um diretório acima
        const diretorio = path.resolve(__dirname,'..','db', arquivo);

        await fs.writeFile(diretorio, conteudo, formato,{flag: 'a'} )
        console.log('Arquivo escrito com sucesso')
    } catch (e){
        logError(e, arquivo);
    }
}

const arquivo = 'texto1.txt';

sobrescreve(arquivo);

// // retorna o nome atual do repositório
// console.log(__dirname);
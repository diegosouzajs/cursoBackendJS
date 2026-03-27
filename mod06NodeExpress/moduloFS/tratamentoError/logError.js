const fs = require('fs').promises;
const path = require('path');


// adicionar novos conteúdos
async function logError(e,fileName, caminho){
    const diretorio = path.resolve(__dirname,'..','log','error.log' )
    const messageError = 
    `
    [${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}]
    Caminho: ${caminho}
    Arquivo: ${fileName}
    Mensagem: ${e}
    Stack: ${e.stack}    
    `;
    await fs.appendFile(diretorio, messageError, 'utf-8');
    console.log('Ocorreu um erro');
}

module.exports = logError;

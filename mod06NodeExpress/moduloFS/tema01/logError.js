const path = require('path');
const fs = require('fs').promises;


async function logError(e, caminho, formato='utf-8'){
    const logPath = path.resolve(__dirname,'logs','error.log');
        const mensagemError = `
        [${new Date().toISOString()}]
        Caminho: ${caminho}
        Mensagem: ${e}
        Stack: ${e.stack}
        `
        await fs.appendFile(logPath, mensagemError, formato);
        console.error('Erro  registrado em error.log');
}

module.exports = logError;
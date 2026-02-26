
// Como escrever um arquivo
const fs = require("fs").promises;
const path = require("path"); 
const logError = require('../logError');




async function lerArquivo(arquivo, formato = 'utf-8') {
    try{
        // constroi o caminho até o arquivo. 
        const caminho = path.resolve(__dirname,'..','arquivos', arquivo);

        // a função readFile acessa o conteúdo do arquivo
        const conteudo = await fs.readFile(caminho, formato);

        return conteudo;
    } catch (e){
        // a função logError salva o erro no arquivo error.log
        logError(e, caminho, formato)
    }
}

const arquivo = 'arquivo.txt'

async function executa (arquivo){

    const texto = await lerArquivo(arquivo);
    console.log(texto);

}

// executa(arquivo);

// lendo linha por linha


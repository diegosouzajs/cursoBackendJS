/* 
Basico do FileSystem em NodeJS
ler arquivo
escrever arquivos
ler diretório
ler arquivos de diretório

*/

// Como escrever um arquivo
const fs = require("fs").promises;
const path = require("path");
const logError = require('../logError');

async function sobrescreverArquivo(caminho, conteudo, formato = 'utf-8'){
    try{
        if(!conteudo || !caminho){
            throw new Error('Caminho ou conteúdo não informado');
        }
        await fs.writeFile(caminho, conteudo, formato);
        console.log('Conteúdo sobrescrito com sucesso');
        console.log();

    } catch (e){
        logError(e, caminho, formato);
    }
}

sobrescreverArquivo('./arquivos/sobrescreve.txt', 'Quarta mensagem');
// sobrescreverArquivo();

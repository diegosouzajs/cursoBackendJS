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


async function escreveArquivo(caminho, conteudo, formato = 'utf-8'){
    try{
        if(!conteudo || !caminho){
            throw new Error('Não foi possível adicionar conteúdo no arquivo');
        }
        await fs.appendFile(caminho, conteudo + '\n', formato);
        console.log('Conteúdo adicionado com sucesso');
    } catch(e){
        logError(e, caminho, formato);
    }
}

escreveArquivo('./arquivos/arquivo.txt','Segunda mensagem');
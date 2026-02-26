const fs = require('fs').promises;
const path = require('path');


async function listarArquivos(diretorio) {
    try {
        const caminho = path.resolve(__dirname, diretorio);

        const arquivos = await fs.readdir(caminho);

        console.log(arquivos);
        return arquivos
    } catch (e) {
        console.log('Erro ao ler diretório: ', e.message);
        logError(e, caminho);
    }
}

const diretorio = '../';

listarArquivos(diretorio);

async function listaDetalhada(diretorio) {
    const caminho = path.resolve(__dirname, diretorio);

    const itens = await fs.readdir(caminho, { withFileTypes: true });

    for (const item of itens) {
        if (item.isFile()) {
            console.log('Arquivo: ', item.name);

        } else if (item.isDirectory()) {
            console.log('Diretório: ', item.name)
        }
    }
}


listaDetalhada(diretorio);



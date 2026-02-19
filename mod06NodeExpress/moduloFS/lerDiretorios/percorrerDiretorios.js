// Função para abrir todos os diretórios

const fs = require('fs').promises;
const path = require('path');

async function percorrerDiretorio(diretorio){
    const caminho = path.resolve(__dirname, diretorio);

    const itens = await fs.readdir(caminho, { withFileTypes: true });

    for (const item of itens) {
        const caminhoItem = path.join(caminho, item.name);

        if(item.isDirectory()){
            console.log('Diretório:', caminhoItem);

            //função recursiva
            await percorrerDiretorio(caminhoItem);

        } else{
            console.log('Arquivo: ', caminhoItem)

    
        }
    }
}

percorrerDiretorio('../');
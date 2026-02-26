const fs = require('fs').promises;
const path = require('path');
const Pessoa = require('../Pessoa');

async function adicionaPessoas(novaPessoa){

    const arquivo = path.resolve(__dirname,'..','db', 'novasPessoas.json')
    const formato = 'utf-8';
    
    try{
        let pessoas = [];

        try{
            const dados = await fs.readFile(arquivo, formato);
            pessoas = JSON.parse(dados);

            // garantir que é um array
            if (!Array.isArray(pessoas)){
                throw new Error('Estrutura inválida: JSON não é um array');
            }
        } catch (e){
            // se não existir, inicia como array vazio
            pessoas= [];
        }

        // adiciona nova pessoa
        pessoas.push(novaPessoa);

        // Reescreve o arquivo JSON
        await fs.writeFile(
            arquivo,
            JSON.stringify(pessoas, null, 2),
            formato
        )
        console.log('Pessoa adicionada com sucesso');

    } catch(e){
        console.log('Erro ao adicionar pessoa:', e);
    }
}


const p1 = new Pessoa('Roberto', 'Souza', 45);
const p2 = new Pessoa('Sinval', 'Dias', 70);

async function executa (){
    await adicionaPessoas(p1)
    await adicionaPessoas(p2)
}

executa();

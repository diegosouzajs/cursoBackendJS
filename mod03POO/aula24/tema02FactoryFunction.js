

function criarPessoa(nome, sobrenome){
    return {
        nome, 
        sobrenome,
        nomeCompleto(){
            return `${nome} ${sobrenome}`;
        }
    }
}

const pessoa = criarPessoa('Diego','Rodrigues');
console.log(pessoa.nomeCompleto());
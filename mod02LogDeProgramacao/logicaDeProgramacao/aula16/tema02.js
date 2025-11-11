/*
Aula 16 - Estrutura de repetição

For... in

O for...in é usado para percorrer as propriedades enumeráveis de um objeto. 
Diferente do for clássico, ele não percorre índices numéricos de forma sequencial, 
mas sim as chaves de um objeto.

for (let chave in objeto) {
  // bloco de código usando objeto[chave]
}

chave → variável que recebe o nome de cada propriedade do objeto a cada iteração.
objeto → objeto cujas propriedades serão percorridas.




*/

// For... in
// semelhante ao for clássico, porem dispensa o uso do incremento
// no exemplo o i representa o índice. Também é ideal para percorrer objetos
// Para arrays, normalmente usamos for clássico ou for...of, 
// que percorre diretamente os valores.
// const frutas = ["maçã", "banana", "laranja"];

// for (let i in frutas) {
//   console.log(i, frutas[i]);
// }
console.log('-----------------------------------')
// o uso ideal do for in é quando precisamos iterar sobre um objeto
const funcionario = {
    nome: 'Diego',
    sobrenome: 'Rodrigues',
    cargo: 'Desenvolvedor',
    empresa:'IFMG',
    idade: 39,
    email: 'diego.souza@ifmg.edu.br',
    salario: 'mixaria',
    admissao: '28/02/2011',
    endereco: {
        rua: 'Rua x',
        numero: 210,
        bairro: 'Centro'
    },
    get saudacao() {
        return 'Olá, ' + this.nome;
    },
    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    },
    
};

// console.log(funcionario['nome']);
Object.defineProperty(funcionario, "cpf", {
  value: "123.456.789-00",
  writable: true,       // impede alteração
  enumerable: true,     // não aparece em loops
  configurable: false    // não pode ser redefinida nem deletada
});

funcionario.cpf = '456.890.233-89';
console.log(funcionario.cpf);

for(propriedade in funcionario){
    const chave = funcionario[propriedade];
    if(typeof chave === 'object' ){
        for(item in chave){
            console.log(item, chave[item]);
        }
    }else{
        console.log(propriedade, funcionario[propriedade]);    
    }
}

/*
Object.defineProperty(objeto, propriedade, descriptor)

permite configurar três tipos principais de controle:
propriedades de dados, de acesso, e de configuração.

Propriedades de Dados

São aquelas com um valor fixo.

Atributo	    Tipo	    Descrição	                                Padrão
value	        qualquer	Valor da propriedade	                    undefined
writable	    booleano	Permite alterar o valor	                    false
enumerable	    booleano	Aparece em for...in e Object.keys()	        false
configurable	booleano	Permite deletar ou redefinir a propriedade	false


*/



// podemos utilizar o for dentro de outro for
// for (let chave in funcionario){
//     if(typeof funcionario[chave] === 'object'){
//         const item = funcionario[chave];
//         for(let propriedade in item){
//             console.log(`${propriedade}:`, item[propriedade]); // não use funcionario.chave pois esse valor não existe no objeto
//         }
//     }else{
//         console.log(`${chave}:`, funcionario[chave]); // não use funcionario.chave pois esse valor não existe no objeto
//     }
// }




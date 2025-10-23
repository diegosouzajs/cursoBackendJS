/* 
Aula 11 - Switch/Case
    
O switch/case em JavaScript é uma estrutura de controle de fluxo usada para 
    tomar decisões de forma mais organizada quando precisamos testar uma 
    variável ou expressão contra múltiplos valores possíveis. 
    Ele é uma alternativa ao uso de várias instruções if...else if...else.

    O switch funciona como um "menu de escolhas". Ele avalia uma expressão apenas 
    uma vez e compara o resultado com os valores definidos em cada case. 
    Quando encontra um valor correspondente, executa o bloco de código associado.

Semelhança com o if...else if
    O switch é usado quando o uso repetitivo de if...else if deixaria o código menos legível.
    Ele é ideal quando testamos a mesma variável ou expressão contra vários valores possíveis.

    Uso do break
    Cada case deve ter um ponto de retirada do código, feito pelo comando break.
    Se o break não for usado, ocorre o chamado fall-through, ou seja, o JavaScript 
    continuará executando os próximos casos até encontrar um break ou o final do switch.

Uso do default
    O default é equivalente ao else do if.
    Ele será executado quando nenhum case corresponder.
    Não é necessário usar break no default, pois é a última condição avaliada.

Uso do return em funções
    Quando o switch está dentro de uma função, não é obrigatório usar break.
    O mais recomendado é usar return em cada case, pois ao retornar um valor a
    execução da função já é interrompida.
*/

let cor = "vermelho";

// caso omita o break, tudo que estiver abaixo do case correto, será impresso
// até encontrar um break em algum outro case
switch(cor){
    case 'vermelho':
        console.log('Pare');
        break;
    case 'amarelo':
        console.log('Atenção');
        break;
    case 'verde':
        console.log('Siga');
        break;
    default:
        console.log('Cor não identificada');    
}

let fruta = 'banana'

// para funções utilizamos o return em substituição ao break pois ao ser atingido,
// a função será encerrada.
function frutas(fruta){
    switch(fruta.toUpperCase()){
        case 'maçã':
            return 'maçã';
        case 'pera':
            return 'pera';
        case 'BANANA':
            return 'banana';
        default:
            return 'não conheço a fruta';
    }
}

let resultado = frutas(fruta);
console.log(resultado);
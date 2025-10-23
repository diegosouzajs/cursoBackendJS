/*
Aula 11 - Avaliação de curto circuito

O que é Avaliação de Curto-Circuito?
    É uma característica dos operadores lógicos && (AND) e || (OR).
    O JavaScript não avalia a segunda expressão quando o resultado 
    já pode ser determinado pela primeira.
    Isso otimiza o código e permite criar verificações seguras.

    O operador lógico AND (&&) avalia da esquerda para a direita.
    Regra: se a primeira condição for false, o resultado é false imediatamente.
    A segunda condição não é avaliada

    O operador lógico OU (||) avalia da esquerda para a direita.
    Se o primeiro operando já for verdadeiro, o resultado é ele mesmo 
    e o segundo não é avaliado.
    Se o primeiro for falso, o resultado depende do segundo valor.


&& para na primeira condição falsa.
|| para na primeira condição verdadeira.
*/


// if(num1 > num2 && num2 < num3){
    //     console.log('Números estão em ordem');
    // }else{
        //     console.log('Núm1 é menor que num2');
        // }
        
        
        // if(num1 > num2 || num2 > num3){
            //     console.log('Num 1 é menor que num2 ou num2 é menor que num3');
            // }else{
                //     console.log('Num1 é menor que num2');
                // }
                
const idade = 15;

function podeVotar(idade){
    if(idade >= 18 && idade <70) return 'Voto obrigatório';
    if(idade < 18 && idade >= 16 || idade >=70) return 'Voto opcional';
    if(idade < 16) return 'Não pode votar';
}

const votar = idade >= 16 && idade <=70 ? 'Pode votar':'Não pode votar';

console.log(votar);

// console.log(podeVotar(idade));
// console.log(podeVotar(15));
// console.log(podeVotar(77));


/*
Operadores ternários

    As operações ternárias em JavaScript são uma forma resumida de escrever 
    estruturas condicionais, funcionando como um atalho para o if ... else.
    O operador ternário é chamado assim porque utiliza três operandos:
    A condição que será avaliada (expressão booleana).
    O resultado caso a condição seja verdadeira.
    O resultado caso a condição seja falsa.
    A sintaxe é:

    condicao ? valorSeVerdadeiro : valorSeFalso

    Ele serve para simplificar decisões no código quando queremos atribuir ou 
    retornar valores diferentes dependendo de uma condição. Em vez de usar 
    várias linhas com if ... else, podemos escrever em uma única linha.


    O operador ternário é indicado para lógica condicional simples (apenas duas
    possibilidades). 
*/
let nota = 4;

// forma recomendada (apenas duas possibilidades de resposta)
const situacao =  nota >= 7 ? "Aprovado":"Reprovado";

// funciona mas não recomendado. Para este caso, utilize if else
let resultado = nota >= 7 ? "Aprovado" : nota >= 5 ? "Recuperação" : "Reprovado";
console.log(situacao);
console.log(resultado);
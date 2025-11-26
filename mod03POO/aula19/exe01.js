/*
Implemente uma função chamada criar_contador(incremento) que:
Receba como parâmetro um valor numérico incremento.
Retorne uma função interna (closure) chamada contar().
A função contar() deve:
    Manter internamente um valor inicial valor = 0.
    A cada chamada, somar incremento ao valor interno.
    Retornar o valor atualizado.
Crie dois contadores:
    c1 = criar_contador(2)
    c2 = criar_contador(5)
Execute as chamadas:
    c1() três vezes
    c2() duas vezes


*/

function criarContador(incremento){
    let valor = 0 
    return function(){
        valor += incremento;
        return valor;
    }
}


const contador = criarContador(2);
const contador2 = criarContador(5);

console.log('Contando de 2 em 2')
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());

console.log();

console.log('Contando de 5 em 5')
console.log(contador2());
console.log(contador2());
console.log(contador2());
console.log(contador2());
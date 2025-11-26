/* 
Implemente uma função chamada criarFiltro(limite) que:
    Receba um número chamado limite.
    Retorne uma função interna filtrar(array) que:
        Receba um array de valores numéricos.
        Retorne apenas os elementos que sejam maiores que limite, 
        utilizando o valor capturado pelo closure.
    Teste o comportamento criando três filtros:
        filtro10 = criarFiltro(10)
        filtro50 = criarFiltro(50)
        filtroNegativo = criarFiltro(-5)
Aplique cada filtro sobre o array:
    const dados = [ -10, -3, 0, 5, 12, 30, 60, 100, -85, 38 , 79, 102 ];
*/


const dados = [ -10, -3, 0, 5, 12, 30, 60, 100, -85, 38 , 79, 102 ];

function criarFiltro(limite){
    return function filtrar (array){
        return array.filter((valor ) => valor > limite );
    }
}

const filtrar10 = criarFiltro(10);
const filtrar50 = criarFiltro(50);
const filtroNegativo = criarFiltro(-5);

console.log('Maiores que 10')
console.log(filtrar10(dados));
console.log()
console.log('Maiores que 50')
console.log(filtrar50(dados));
console.log()
console.log('Maiores que -5')
console.log(filtroNegativo(dados));
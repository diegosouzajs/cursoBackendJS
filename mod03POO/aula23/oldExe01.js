
function fibonnacci(num) {
    let resultado = 0;
    if (num === 1) return resultado = 0;
    if (num === 2) return resultado = 1;
    resultado = fibonnacci(num - 1) + fibonnacci(num - 2);
    return resultado;
}

console.log(fibonnacci(10));


// function listaFibonnacci(num, lista = [0, 1]) {
//     if (lista.length >= num) {
//         return lista.slice(0, num); // garante que a lista tenha extamente n valores
//     }

//     const proximo = lista[lista.length - 1] + lista[lista.length - 2];
//     lista.push(proximo);

//     return listaFibonnacci(num, lista);

// }

// console.log(listaFibonnacci(10));
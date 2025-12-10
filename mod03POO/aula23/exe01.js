function fibonnacci(n){
    let resultado = 0;
    // caso base
    if(n === 0) return resultado = 0;
    if(n === 1) return resultado = 1;
    resultado = fibonnacci(n-1) + fibonnacci(n-2);
    return resultado;
}
// console.log(fibonnacci(10));


function gerarSequencia(qtd){
    const resultado = [];
    let i = 0;
    
    while(i < qtd){
        let fibo = fibonnacci(i);
        resultado.push(fibo);
        i++;        
    }
    return resultado;
}


console.log(gerarSequencia(10));




// function gerarSequencia(qtd){
//     const resultado = [];
//     let inicio = 0;
//     while(inicio < qtd){
//         let fibo = fibonnacci(inicio);
//         resultado.push(fibo);
//         inicio++;
//     };
//     return resultado;
// }

// console.table(gerarSequencia(20));
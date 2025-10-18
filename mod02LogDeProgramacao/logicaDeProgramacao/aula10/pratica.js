const idade = 15;

// function podeVotar(idade){
//     if (idade >= 18 && idade <=60){
//         return 'Voto obrigatório';
//     }
//     if (idade >=16 || idade >= 70 ){
//         return 'Voto opcional';
//     }
//     return 'Você não pode votar';    
// }


// Mais simplificado
function podeVotar(idade){
    if (idade >= 18 && idade <=69) return 'Voto obrigatório';    
    if (idade >=16 || idade >= 70) return 'Voto opcional';
    return 'Você não pode votar';    
}

const listIdade = [10, 30, 9, 18];

for (let i = 0; i < listIdade.length; i++){
    console.log(podeVotar(listIdade[i]));
}


try{
    console.log('Abrir arquivo')
    console.log('Manipular arquivo');
    // console.log(a);
    console.log('Fechar arquivo');
}catch(e){
    console.log('Tratei meu erro');
}
finally{
    console.log('Crio condição para fechar arquivo');
}

// const numero;

console.log(naoExisto);



try{
    // tenta executar
    if(typeof numero !== 'number'){
        throw new TypeError('Número inválido');
    }else{
        console.log(numero);
    }
    console.log(naoExisto);
    try{

    }catch(e){

    }
}catch(e){
    //só executa se houver erro no try
    // as condicionais abaixo lidam com erros específicos
    // instanceof indica se o erro ocorrido pertence ao tipo informado

    if(e instanceof TypeError){
        console.log('O valor não é um número');
    }else if(e instanceof ReferenceError){
        console.log('A variavel não existe')
    }else{
        console.log('Ocorreu um erro', e.name, e.message);
    }
    
}finally{ // opcional
    // sempre é executado
}


function divisao(x, y){
    if(x === 0 || y === 0){
        // lançando meu próprio erro
        throw new TypeError('x e y devem ser maiores que zero')
    }
    return x/y;
}

try{
    // console.log(divisao(10, 2));
    console.log(divisao(10, 0));
} catch(e){
    // console.log(e);
    console.log(e.name);
    console.log(e.message);
}finally{
    console.log('FINALLY: Sempre é executado.')
}

// A função abaixo retorna a hora atual, mas vamos supor que eu queira 

// setInterval configura um intervalo de tempo que determina a execução de uma função
// durante este intervalo

function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        // timeZone: 'UTC'
    });
}

// isso é dispensado pois podemos passar uma função anonima no primeiro parametro
// do meu setInterval 
const contador = function funcaoDoInterval(){
    console.log(mostraHora());
};

// passamos a referencia da função para ser executada
// o segundo parâmetro recebe o valor que determina de quanto em quanto
//  tempo eu quero que isso seja executado.
setInterval(contador, 1000);


// isso substitui  a criação do contador e a passagem para a função na linha acima
// setInterval executa a operação até a cada intervalo de tempo defindo
// o tempo deve ser defindo em milissegundos.
// Se a execução não for interrompida, ele continuará executando.
// para interromper a execução, diretamente no prompt, podemos pressionar ctrl + c

setInterval(function(){
    console.log(mostraHora())
}, 1000);

//setTimeout similar ao setInterval, porém é executada apenas uma vez
// ele pode ser executado, juntamente com o clearInterval, para interromper o 
// fluxo do setInterval


// aqui indico ao sistema que ao decorrer 15 segundos,
// a execução deve ser interrompida 
setTimeout(function(){
    clearInterval(contador);
}, 15000);

// aqui indico ao sistema que após 5 segundos, ele imprima no console
// a mensagem "Olá mundo!"
setTimeout(function(){
    console.log('Olá mundo!')
}, 5000);
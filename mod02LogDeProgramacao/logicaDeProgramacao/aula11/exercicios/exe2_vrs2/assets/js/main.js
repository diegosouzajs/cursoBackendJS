/* 
Modelos de html a serem usados nos exercícios

O caminho que usamos para linkar os arquivos no html é o relativo
que seria do ponto de localização do html em diante
const h1 = document.querySelector('.container h1');
h1.innerHTML = 'So pra você ver';

const data = new Date();
h1.innerHTML = data.toString();


function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'Valor Inválido';
            return diaSemanaTexto;
    }
}

function getNomeMes(numeroMes){
    let nomeMes;
    switch(numeroMes){
        case 0:
            nomeMes = 'Janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'Fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'Março';
            return nomeMes;
        case 3:
            nomeMes = 'Abril';
            return nomeMes;
        case 4:
            nomeMes = 'Maio';
            return nomeMes;
        case 5:
            nomeMes = 'Junho';
            return nomeMes;
        case 6:
            nomeMes = 'Julho';
            return nomeMes;
        case 7:
            nomeMes = 'Agosto';
            return nomeMes;
        case 8:
            nomeMes = 'Setembro';
            return nomeMes;
        case 9:
            nomeMes = 'Outubro';
            return nomeMes;
        case 10:
            nomeMes = 'Novembro';
            return nomeMes;
        case 11:
            nomeMes = 'Dezembro';
            return nomeMes;
        default:
            nomeMes = 'Valor Inválido';
            return nomeMes;
    }
}

function criaData(data){
    const diaSemana = data.getDay();
    const dia = data.getDate();
    const numeroMes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
    const mesEmTexto = getNomeMes(numeroMes);

    return (
        `${diaSemanaTexto}, ${dia} de ${mesEmTexto} de ${ano} ` + 
        `${zeroEsquerda(hora)}:${zeroEsquerda(min)}`
    );
}

function zeroEsquerda(num){
    return num > 9 ? num : `0${num}`;
}

h1.innerHTML = criaData(data);
*/


// const div = document.querySelector('#resultado');
// div.innerHTML = 'So pra você ver';

// const data = new Date();
// div.innerHTML = data.toString();

// function getDiaSemanaTexto(diaSemana){
//     const diasSemana = ['domingo', 'segunda-feira','terça-feira','quarta-feira',
//         'quinta-feira','sexta-feira','sábado'];
//         return diasSemana[diaSemana];
// }

// function getNomeMes(numeroMes){
//     const meses = ['janeiro', 'fevereiro','março','abril','maio','junho','julho',
//         'agosto','setembro','outubro','novembro','dezembro'];
//         return meses[numeroMes];
// }

// function criaData(data){
//     const diaSemana = data.getDay();
//     const dia = data.getDate();
//     const numeroMes = data.getMonth();
//     const ano = data.getFullYear();
//     const hora = data.getHours();
//     const min = data.getMinutes();
//     const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
//     const mesEmTexto = getNomeMes(numeroMes);

//     return (
//         `${diaSemanaTexto}, ${dia} de ${mesEmTexto} de ${ano} ` + 
//         `${zeroEsquerda(hora)}:${zeroEsquerda(min)}`
//     );
// }

// function zeroEsquerda(num){
//     return num > 9 ? num : `0${num}`;
// }

// div.innerHTML = criaData(data);


//outra forma de fazer
const div= document.querySelector('#resultado');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'full'
};
div.innerHTML = data.toLocaleString('pt-BR', opcoes);
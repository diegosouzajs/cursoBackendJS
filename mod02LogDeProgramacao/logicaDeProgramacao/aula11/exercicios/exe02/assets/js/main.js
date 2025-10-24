/* 
Apresentando uso do objeto Date
*/

const agora = new Date();
console.log(agora);

function textoDiaSemana(diaSemana){
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

function mesTexto(mes){
    let mesTexto;
    switch(mes){
        case 0:
            mesTexto = 'Janeiro';
            return mesTexto;
        case 1:
            mesTexto = 'Fevereiro';
            return mesTexto;
        case 2:
            mesTexto = 'Março';
            return mesTexto;
        case 3:
            mesTexto = 'Abril';
            return mesTexto;
        case 4:
            mesTexto = 'Maio';
            return mesTexto;
        case 5:
            mesTexto = 'Junho';
            return mesTexto;
        case 6:
            mesTexto = 'Julho';
            return mesTexto;
        case 7:
            mesTexto = 'Agosto';
            return mesTexto;
        case 8:
            mesTexto = 'Setembro';
            return mesTexto;
        case 9:
            mesTexto = 'Outubro';
            return mesTexto;
        case 10:
            mesTexto = 'Novembro';
            return mesTexto;
        case 11:
            mesTexto = 'Dezembro';
            return mesTexto;
        default:
            mesTexto = 'Valor Inválido';
            return mesTexto;
    }
}

function criarH4(){
    const h4 = document.createElement('h4');
    return h4;
}


function imprimiNaPaginaHtml(paraImprimir){
    const resultado = document.querySelector('#resultado');
    const h4 = criarH4();
    h4.innerHTML = paraImprimir;
    resultado.appendChild(h4);
    return resultado;
    
}

function formataData(data){
    const diaSemana = data.getDay();
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const diaSemanaTexto = textoDiaSemana(diaSemana);
    const mesEmTexto = mesTexto(mes);
    const imprimir = `${diaSemanaTexto}, ${dia} de ${mesEmTexto} de `+
    `${ano} ${zeroEsquerda(hora)}:${zeroEsquerda(min)}.`
    imprimiNaPaginaHtml(imprimir);
    
}

function zeroEsquerda(num){
    return num > 9 ? num : `0${num}`;
}

const data = new Date();

const data2 = new Date('2025-5-11 08:32:15');



formataData(data);
formataData(data2);
// imprimiNaPaginaHtml(dataNascimento);


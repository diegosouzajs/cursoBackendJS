/* Função para verificar a estação do ano 
Elabore uma função que verifica a estação do ano conforme o mês
O usuário deverá inserir um mês em um campo no html do tipo input
(não usar o prompt). Com o valor inserido você deverá verificar 
qual é a estação do ano do referido mês. Caso o valor informado não 
corresponda a um mês válido, deve retornar "Valor inválido".
Abaixo são listadas as estações e os seus respectivos meses

const inverno = ['junho', 'julho', 'agosto'];
const primavera = ['setembro', 'outubro', 'novembro'];
const verao = ['dezembro', 'fevereiro', 'janeiro'];
const outono = ['março', 'abril', 'maio'];

*/

// if(mes === 'março' || mes === 'abril' || mes == 'maio'){
//  console.log('Outono');
//}

// const mes = 'março'

// switch (mes){
//     case 'março':
//     case 'abril':
//     case 'maio':
//         console.log('Outono');
//         break;
//     default:
//         console.log('Mês inválido!');
// }

function verEstacao(){
    const inverno = ['junho', 'julho', 'agosto'];
    const primavera = ['setembro', 'outubro', 'novembro'];
    const verao = ['dezembro', 'fevereiro', 'janeiro'];
    const outono = ['março', 'abril', 'maio'];
    const form = document.querySelector('form');
    
    console.log(mes);
    const resposta = document.querySelector('#resposta');
    
    function imprimirEstacao(evento){
        evento.preventDefault();
        const mes = document.querySelector('#mes').value.toLowerCase();
        if(inverno.includes(mes)) {
            resposta.innerHTML = `<p class="success">A estação do mês ${mes} é INVERNO</p>`;
        }else if (primavera.includes(mes)){
            resposta.innerHTML = `<p class="success">A estação do mês ${mes} é PRIMAVERA</p>`;
        }else if (verao.includes(mes)){
            resposta.innerHTML = `<p class="success">A estação do mês ${mes} é VERÃO</p>`;
        }else if (outono.includes(mes)){
            resposta.innerHTML = `<p class="success">A estação do mês ${mes} é OUTONO</p>`;
        }else{
            resposta.innerHTML = `<p class="error">Valor inválido! ${mes}</p> `;
        }
    }
    form.addEventListener('submit', imprimirEstacao);
}

verEstacao();




// function verEstacaoMes(){
//     const inverno = ['junho', 'julho', 'agosto'];
//     const primavera = ['setembro', 'outubro', 'novembro'];
//     const verao = ['dezembro', 'fevereiro', 'janeiro'];
//     const outono = ['março', 'abril', 'maio'];
    
//     //capturar os valores do meu formulário e o campo que receberá as respostas
//     const resposta = document.querySelector('#resposta')
//     const form = document.querySelector('form');

//     // função para imprimir na tela
//     function imprimirValor(evento){
//         // recebe o evento e evita o seu comportamento padrão
//         evento.preventDefault();
//         const mes = form.querySelector('#mes').value;
//         console.log(mes);
//         if (primavera.includes(mes.toLowerCase())){
//             resposta.innerHTML = `<p class="success">A estação no mês de ${mes} é PRIMAVERA</p>`;
//         } 
//         else if (verao.includes(mes.toLowerCase())){
//             resposta.innerHTML = `<p class="success">A estação no mês de ${mes} é VERÃO</p>`;
//         } 
//         else if (outono.includes(mes.toLowerCase())){
//             resposta.innerHTML = `<p class="success">A estação no mês de ${mes} é OUTONO</p>`;
//         } 
//         else if (inverno.includes(mes.toLowerCase())){
//             resposta.innerHTML = `<p class="success">A estação no mês de ${mes} é INVERNO</p>`;
//         } else {
//             resposta.innerHTML = `<p class="success">O valor ${mes} não é um mês válido</p>`;    
//         }        
//     }
    
//     // adiciono uma espécie de escuta ao meu formulário que ao ser submetido, não
//     // recarregará a página, mas sim envia para a função imprimirValor
//     form.addEventListener('submit', imprimirValor);
// }

// verEstacaoMes();


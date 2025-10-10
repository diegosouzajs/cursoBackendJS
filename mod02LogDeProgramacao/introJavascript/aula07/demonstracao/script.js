/*
O que é o querySelector()

    -> Documentação Oficial: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

    O método querySelector() serve para selecionar um elemento HTML dentro da página
    (DOM), usando qualquer seletor CSS válido — como nome de tag, classe, id, 
    ou combinações mais complexas.

    Ele retorna apenas o primeiro elemento que corresponde ao seletor informado.

    Sintaxe
        document.querySelector(seletor);

        document → indica que estamos procurando no documento inteiro.
        seletor → é uma string no formato de um seletor CSS.

    Formas de seleção
        Selecionar por nome da tag
            let titulo = document.querySelector('h1');
            titulo.textContent = 'Novo título';
        
        Selecionar por classe
            let botao = document.querySelector('.btn-principal');
            botao.style.backgroundColor = 'green';

        Selecionar por id
            let menu = document.querySelector('#menu');
            menu.style.display = 'none';

        Selecionar elementos aninhados
            Você pode usar hierarquia de seletores, como faria em CSS:

            let item = document.querySelector('ul li');
            console.log(item.textContent);

        ATENÇÃO: só retorna um elemento. Mesmo que existam vários elementos iguais,
        somente o primeiro será retornado.


O que é innerHTML

    Documentação -> https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

    A propriedade innerHTML representa todo o conteúdo HTML (tags + texto) dentro de um elemento.
    Você pode:
        Ler o conteúdo (para obter o HTML interno);
        Escrever (para substituir ou inserir novo conteúdo).

    ⚠️ Cuidados ao usar innerHTML
    🚫 1. Sobrescreve todo o conteúdo
    Ao definir innerHTML = ..., o conteúdo anterior é apagado e substituído — 
    o que pode remover event listeners ou causar refluxos desnecessários no DOM.
    Para que isso não ocorra, fazemos a concatenação do conteúdo. Desta forma, o
    conteúdo presente na página, permanece e o novo conteúdo é incluído logo após
    ex:
        const resultado = document.querySelector('#resultado'); // pego o 
        // conteúdo presente no primeiro elemento de id igual a resultado
        resultado.innerHTML += `<h3>Nome: ${nome}<br> // sinal de + fará a concatenação do conteúdo

    🚫 2. Risco de injeção de código (XSS)
    Se você insere conteúdo vindo de usuário (ex.: formulários, APIs externas) 
    dentro de innerHTML sem validação, alguém pode inserir código malicioso.

*/


const nome = prompt('Informe o seu nome: ');
const idade = prompt('Informe sua idade');
const altura = prompt('Informe sua altura');
const peso = prompt('Informe seu peso');


// arrow function para calcular o IMC
const IMC = (peso, altura) => {
    const peso1 = Number(peso);
    const altura1 = Number(altura);
    const imc = (peso1 /(altura1**2));
    return imc;
}

// utilizo o seletor querySelector para buscar na minha página 
// html o elemento que desejo. Ele retorna o primeiro elemento que encontrar
// # -> indica que o item buscado é um ID
const resultado = document.querySelector('#resultado');

resultado.innerHTML += `<h3>Nome: ${nome}<br>
Idade: ${idade}<br>
Altura: ${altura}<br>
IMC: ${IMC(peso, altura)}<\h3>`;
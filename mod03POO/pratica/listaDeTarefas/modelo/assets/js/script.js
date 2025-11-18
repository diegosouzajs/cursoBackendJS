// elementos a que serão buscados no HTML através da interação com o usuário
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas')


//função que cria item da lita

function criaLi(){
    const li = document.createElement('li');
    return li;
}

// salva a tarefa quando o usuário teclar enter
inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})


// função para limpar o input

function limpaInput(){
    inputTarefa.valeu="";
    inputTarefa.focus();
}

// criar tarefas

function criaTarefa(textoInput){
    const li = criaLi();

    // texto da tarefa
    const spanTarefa= document.createElement('span');
    spanTarefa.classList.add('texto-tarefa');
    spanTarefa.innerText = textoInput;

    li.appendChild(spanTarefa);
    criaBotoes(li);
    tarefas.appendChild(li);

    limpaInput();
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(e){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
});

// Função para criar os botões e Editar, apagar e salvar

function criaBotoes(li){
    const div = document.createElement('div');
    div.classList.add('acoes');

    const botaoEditar = document.createElement('button');
    botaoEditar.innerText = 'Editar';
    botaoEditar.classList.add('editar');

    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.classList.add('apagar');


    // incluindo os botões na minha div
    div.appendChild(botaoEditar);
    div.appendChild(botaoApagar);

    li.appendChild(div);
}

// Ativando botões editar, salvar e apagar

document.addEventListener('click', function(e){
    const el = e.target;

    // apagar
    if(el.classList.contains('apagar')){
        el.closest('li').remove();
        salvarTarefas()
    }

    // editar
    if(el.classList.contains('editar')){
        const li = el.closest('li');
        const spanTarefa = li.querySelector('.texto-tarefa');
        
        const textoAntigo = spanTarefa.innerText;

        // criar input para editar tarefa
        const inputEdicao = document.createElement('input');
        inputEdicao.type = 'text';
        inputEdicao.value = textoAntigo;
        inputEdicao.classList.add('input-edicao');

        li.innerHTML = '';
        li.appendChild(inputEdicao);

        // criar o botão de salvar
        const botaoSalvar = document.createElement('button');
        botaoSalvar.innerText = 'Salvar';
        botaoSalvar.classList.add('salvar');
        li.appendChild(botaoSalvar);

        inputEdicao.focus();

        // Salvar a edição ao clicar no enter
        inputEdicao.addEventListener('keypress', function(event){ // e, evento,
            if(event.key === 13 || event.key === 'Enter'){
                salvarEdicao(li, inputEdicao.value);
            }
        });

        // salvar ao clicar no botão salvar
        botaoSalvar.addEventListener('click', function(){
            salvarEdicao(li, inputEdicao.value);
        })
    }
})

function salvarEdicao(li, novoTexto){
    if(!novoTexto.trim()) return false;
    
    li.innerHTML = '';

    const span = document.createElement('span');
    span.classList.add('texto-tarefa');
    span.innerText = novoTexto.trim();

    li.appendChild(span);

    // recrio os botões
    criaBotoes(li);

    salvarTarefas();
}


// salvar no meu localStorage
function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.querySelector('.texto-tarefa').textContent.trim(); // elimina excesso de espaço no ínio e no fim da string
        listaDeTarefas.push(tarefaTexto);        
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    console.log('stringfy',tarefasJSON);
    localStorage.setItem('tarefas', tarefasJSON);

}

// carregar as tarefas para a minha página 
// quando ela for aberta
function adicionaTarefasSalvas(){
    const tarefasSalvas = localStorage.getItem('tarefas');
    if(!tarefasSalvas) return;
    const listaDeTarefas = JSON.parse(tarefasSalvas);
    console.log(listaDeTarefas);
    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();
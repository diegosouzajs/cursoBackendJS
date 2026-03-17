// Captura campos

const cepInput = document.getElementById("cep");
const rua = document.getElementById("logradouro");
const numero = document.getElementById("numero");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");
const pais = document.getElementById("pais");

const form = document.getElementById("formEndereco");
const resultado = document.getElementById("resultado");

// Evento ao sair do campo CEP
cepInput.addEventListener("blur", buscarEndereco);

async function buscarEndereco(){

    const cep = cepInput.value.replace(/\D/g,'');

    console.log("CEP digitado:", cep);

    if(cep.length !== 8){
        alert("CEP inválido");
        return;
    }

    try{

        const url = `https://viacep.com.br/ws/${cep}/json/`

        console.log("Consultando:", url);

        const response = await fetch(url);

        const dados = await response.json();

        console.log("Resposta API:", dados);

        if(dados.erro){
            alert("CEP não encontrado");
            return;
        }

        // Preenche os campos

        rua.value = dados.logradouro;
        bairro.value = dados.bairro;
        cidade.value = dados.localidade;
        estado.value = dados.uf;
        pais.value = "Brasil";

    }catch(error){
        console.error("Erro na requisição:", error);
        alert("Erro ao consultar CEP");

    }
}


// Salvar endereço
form.addEventListener("submit", async function(event){
    event.preventDefault();
    const endereco = {
        cep: cepInput.value,
        rua: rua.value,
        numero: numero.value || 'sem numero',
        bairro: bairro.value,
        cidade: cidade.value,
        estado: estado.value,
        pais: pais.value
    };

    try{
        const response = await fetch("/salvar-endereco", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(endereco)
        });

        const resultado = await response.json();
        console.log(resultado);
        alert("Endereço salvo com sucesso!");

    }catch(error){
        console.error(error);
        alert("Erro ao salvar endereço");
    }

})
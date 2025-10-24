/*
Criar um pequeno script que solicite a data de nascimento do usuário e calcule 
a idade atual com base na data de hoje.
*/

// 1. Solicita a data de nascimento do usuário
let dataNascimento = prompt("Digite sua data de nascimento (formato: AAAA-MM-DD):");

// 2. Cria um objeto Date com a data informada
let nascimento = new Date(dataNascimento);

// 3. Cria um objeto Date com a data atual
let hoje = new Date();

// 4. Calcula a idade
let idade = hoje.getFullYear() - nascimento.getFullYear();

// 5. Ajusta se o aniversário ainda não aconteceu este ano
let mesAtual = hoje.getMonth();
let mesNascimento = nascimento.getMonth();

if (
  mesAtual < mesNascimento ||
  (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())
) {
  idade--;
}

// 6. Exibe o resultado
alert(`Você tem ${idade} anos.`);

/*
Aula 16 - Do... While

O que é

O do...while é similar ao while, mas a condição é verificada após a execução do bloco.
Isso garante que o bloco seja executado pelo menos uma vez, mesmo que a condição seja falsa.

Estrutura básica:
do {
  // bloco de código
} while (condicao);


Break e continue

O break é usado para interromper imediatamente a execução de um loop (for, while, do...while) ou de um switch.
Quando chamado, o controle sai do loop, e o código continua após o bloco de repetição.

O continue interrompe a iteração atual do loop, mas não encerra o loop.
O loop continua com a próxima iteração.
Útil para pular certos valores sem sair completamente do loop.


*/

// let i = 0;

// do {
//   i++;
//   if(i === 3){
//     continue;
//   }
//   console.log(i);
// } while (i < 5);

// console.log('Oi, sai do do... while');



// o erro era que os valores de user e senha eram constantes. Neste contexto, 
// o laço while nunca era executado
let user;
let senha;

do {
  user = prompt("Digite o usuário:");
  senha = prompt("Digite a senha:");

  if (user === "diego.souza" && senha === "123") {
    console.log("Usuário autenticado!");
  } else {
    console.log("Usuário ou senha incorretos. Tente novamente.");
  }

} while (user !== "diego.souza" || senha !== "123");
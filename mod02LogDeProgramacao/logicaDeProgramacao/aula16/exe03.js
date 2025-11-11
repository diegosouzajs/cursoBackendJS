/*
Tema: Cadastro com validação de idade

Implemente um programa que simule o cadastro de usuários em um sistema.
O programa deve solicitar idades simuladas (usando valores em um array) e:
    Ignorar (continue) cadastros de menores de 18 anos.
    Encerrar (break) quando encontrar um valor negativo (simulando cancelamento).
    Exibir todas as idades válidas cadastradas.
    const idades = [22, 17, 35, 15, 40, -1, 29];
*/

const idades = [22, 17, 35, 15, 40, -1, 29];
let i = 0;
const cadastrados = [];

do {
  const idade = idades[i];

  if (idade < 0) {
    console.log("Idade inválida detectada. Encerrando cadastro...");
    break; // finaliza o loop
  }

  if (idade < 18) {
    console.log(`Idade ${idade} ignorada (menor de idade).`);
    i++;
    continue; // pula o restante e volta ao início do loop
  }

  console.log(`Idade ${idade} cadastrada com sucesso!`);
  cadastrados.push(idade);
  i++;
} while (i < idades.length);

console.log("Cadastrados:", cadastrados);

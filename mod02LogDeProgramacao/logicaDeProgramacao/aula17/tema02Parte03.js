/*
-----------------------------------------------------
 DEMONSTRAÇÃO ACADÊMICA:
 setTimeout(), setInterval(), clearTimeout(), clearInterval()
-----------------------------------------------------

 Autor: Diego (Analista de Sistemas / Mestrando)
 Objetivo: demonstrar o funcionamento dos principais
 temporizadores assíncronos do JavaScript.
-----------------------------------------------------
*/

console.log("🟢 Iniciando demonstração dos temporizadores...");

// 1️⃣ setTimeout → executa uma vez após determinado tempo
const timeoutId = setTimeout(() => {
  console.log("⏰ (setTimeout) Esta mensagem aparece após 5 segundos!");
}, 5000);

// 2️⃣ clearTimeout → cancela a execução do timeout antes que ocorra
// Neste exemplo, cancelaremos o timeout após 3 segundos.
setTimeout(() => {
  clearTimeout(timeoutId);
  console.log("❌ (clearTimeout) O alerta foi cancelado antes dos 5 segundos.");
}, 3000);

// 3️⃣ setInterval → executa repetidamente em intervalos definidos
let contador = 1;
const intervaloId = setInterval(() => {
  console.log(`🔁 (setInterval) Execução nº ${contador}`);
  contador++;

  // Após 5 execuções, o intervalo será interrompido:
  if (contador > 5) {
    clearInterval(intervaloId);
    console.log("🟥 (clearInterval) Intervalo encerrado após 5 repetições.");
  }
}, 1000); // repete a cada 1 segundo

// 4️⃣ Observação importante sobre o event loop:
// Mesmo que o código principal termine, os temporizadores agendados
// permanecem ativos até serem executados ou cancelados.
console.log("📘 O script principal continua rodando sem bloqueio...");


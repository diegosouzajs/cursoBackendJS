/*
Aula 11 - Objeto Date

    O objeto Date em JavaScript é uma estrutura nativa que representa datas e 
    horas. Ele é amplamente utilizado para manipulação temporal em aplicações 
    web, como exibição de horários, cálculos de intervalo, formatação de datas,
    entre outros

    O Date é um objeto embutido (built-in object) do JavaScript, projetado para
    lidar com valores relacionados a data e hora. Internamente, ele armazena os
     dados como o número de milissegundos decorridos desde 1º de janeiro de 
     1970 (UTC), conhecido como Unix Epoch.

    O Date serve para:
    Capturar a data e hora atuais do sistema.
    Criar, manipular e formatar datas específicas.
    Calcular intervalos de tempo entre dois eventos.
    Trabalhar com fusos horários (embora com limitações).

*/

// Cria uma nova data com o momento atual

const dataNova = new Date();

console.log("=== INFORMAÇÕES DA DATA ATUAL ===");
console.log("Data no formato bruto", dataNova);
console.log("Data atual formatada:", dataNova.toLocaleDateString('pt-BR'));
console.log("Hora atual formatada:", dataNova.toLocaleTimeString('pt-BR'));
console.log();

// Cria uma data específica (ano, mês [0-11], dia)
// Ao gerar uma data nova, atente-se para os índices dos meses e dos dias da 
// semana. Ambos iniciam em 0 sendo que dia de semana termina no 6 (sábado) e
// meses termina no 11 (dezembro)
const dataEspecifica = new Date(2025, 3, 8); // 8 de abril de 2025

console.log("=== DATA ESPECÍFICA CRIADA ===");
console.log("Data específica:", dataEspecifica.toLocaleDateString('pt-BR'));
console.log();


// --- Métodos para obter informações da data ---

console.log("=== MÉTODOS GET ===");
console.log("Ano:", dataNova.getFullYear());            // retorna o ano (ex.: 2025)
console.log("Mês:", dataNova.getMonth() + 1);           // retorna o mês (0 = janeiro)
console.log("Dia do mês:", dataNova.getDate());         // dia do mês (1–31)
console.log("Dia da semana:", dataNova.getDay());       // 0 = domingo, 6 = sábado
console.log("Hora:", dataNova.getHours());              // 0–23
console.log("Minutos:", dataNova.getMinutes());         // 0–59
console.log("Segundos:", dataNova.getSeconds());        // 0–59
console.log("Milissegundos:", dataNova.getMilliseconds()); // 0–999
console.log("Timestamp (ms desde 01/01/1970):", dataNova.getTime());
console.log();

// --- Métodos para alterar informações da data ---
// Ao alterar o dia (setDate) O mês começa no dia 0 e termina no dia 30, 
// considerando as devidas excessões
console.log("=== MÉTODOS SET ===");


dataNova.setFullYear(2030);     // muda o ano
dataNova.setMonth(11);          // muda o mês (11 = dezembro)
dataNova.setDate(25);           // muda o dia
dataNova.setHours(15, 30, 0);   // define hora, minuto e segundo
console.log("Data modificada:", dataNova.toLocaleString('pt-BR'));
console.log();

// --- Verificação final ---
console.log("=== RESUMO FINAL ===");
console.log("Data final formatada:", dataNova.toLocaleDateString('pt-BR'));
console.log("Hora final formatada:", dataNova.toLocaleTimeString('pt-BR'));



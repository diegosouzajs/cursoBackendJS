/* Crie variáveis que armazenem nome, sobrenome, idade, peso e altura em metros. 
Faça o cálculo do IMC (peso / (alturaEmM * alturaEmM).

Por fim, imprima as informações seguindo o formato abaixo, 
mas utilizando os dados de suas variáveis:

Diego Rodrigues tem 39 anos, pesa 80 kg. Tem 1.72 de altura e seu imc é de 
27,041644
 
*/



const nome = "Diego";
const sobrenome = "Rodrigues";
const idade = 39;
const peso = 80;
const alturaEmM = 1.72;

const imc = peso / (alturaEmM * alturaEmM);

console.log(nome+' '+ sobrenome +' tem '+ idade +' anos, pesa '+peso+'kg. Tem '+
    alturaEmM+'m altura e seu IMC é de '+imc)

console.log(nome, sobrenome,' tem ', idade,' anos, pesa ', peso,'kg. Tem ',
    altura,'m altura e seu IMC é de ',imc)


console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg. 
    Tem ${alturaEmM} metros de altura e seu IMC é de ${imc}`)
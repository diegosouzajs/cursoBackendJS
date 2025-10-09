/* Crie variáveis que armazenem nome, sobrenome, idade, peso e altura em metros. 
Faça o cálculo do IMC (peso / (alturaEmM * alturaEmM).

Por fim, imprima as informações seguindo o formato abaixo, 
mas utilizando os dados de suas variáveis:

Diego Rodrigues tem 39 anos, pesa 80 kg. Tem 1.72 de altura e seu imc é de 
27,041644

*/
/**
 * IMPORTANTE
 * Para importar um arquivo javascript para dentro de um html
 * utilizamos a tag script do html
 * 
 * Entre as tags body do html, devemos inserir, o mais próximo possível da última
 * o seguinte:
 * <script src='caminhoDoArquivo/nomeDoArquivo.js"></script>
 * Onde:
 *      - caminhoDoArquivo representa o diretório onde seu script está salvo
 *        caso esteja dentro da mesma pasta que o arquivo html, não é necessário informa-lo
 *      - nomeDoArquivo.js representa a nomeação do arquivo em que salvou o código javascript 
 *        a ser importado.
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
/* Piada: O programador e a instrução ambígua

A esposa de um programador pediu que ele fosse ao mercado comprar leite, com a seguinte instrução:
- "Querido, vá ao mercado e compre 1 litro de leite.  
  Se tiver pão, compre 7."

No mercado, o programador encontrou o leite e verificou se havia pão.  
Ao encontrar os pães, ele interpretou literalmente a instrução da esposa e comprou 7 litros de leite.

Ao chegar em casa, a esposa, irritada, explicou que queria **1 litro de leite e 7 pães**, não 7 litros de leite.

Moral da história:
- Nunca passe instruções ambíguas para programadores.  
- Durante o desenvolvimento, as informações devem ser claras, objetivas e coerentes com os objetivos do negócio.
*/

console.log();
console.log('O que programador entendeu');

let leite = 1;
let pao = false;

if (!pao){
    leite = 7;
    console.log('Havia pão então comprei 7 litros de leite');
}else{
    console.log('Comprei 1 litro de leite');
}

console.log();
console.log('O que a esposa realmente queria');

const leite1 = 1;
let pao1 = false;

if(!pao1){
    pao1 = 7;
    console.log(`Havia pão então comprei ${pao1} e ${leite1} litro de leite`);
}else{
    console.log('Não havia pães então comprei apenas 1 litro de leite');
}
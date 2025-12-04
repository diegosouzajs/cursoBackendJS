function Produto(nome, preco) {
    let valor = preco; // variável privada
    this.nome = nome;
    // this.valor = 1

    Object.defineProperty(this, "preco", {
        get: () => valor,
        set: novoValor => {
            if (novoValor > 0) valor = novoValor;
            else console.log("Valor inválido!");
        }
    });
}

const p1 = new Produto("Notebook", 2500);
console.log(p1.preco); // 2500
// p1.tipo = 'doce'; // "Valor inválido!"
console.log(p1.valor); // 2500

console.log(p1);
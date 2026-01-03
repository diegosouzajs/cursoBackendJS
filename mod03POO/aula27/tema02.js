/* 
Aula 27 - Métodos de Instância e métodos estáticos

Um método estático é associado à própria classe, e não às suas instâncias.
É definido com a palavra-chave static e normalmente usado para operações 
utilitárias ou fábricas de objetos (factory methods).

*/

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  // método de instância
  apresentar() {
    console.log(`Olá, meu nome é ${this.nome}.`);
  }

  // Método estático -> da classe
  static compararIdades(p1, p2) {
    if (p1.idade > p2.idade) return `${p1.nome} é mais velho.`;
    if (p2.idade > p1.idade) return `${p2.nome} é mais velho.`;
    return "Ambos têm a mesma idade.";
  }
}

const a = new Pessoa("Ana", 25);
const b = new Pessoa("Bruno", 22);

// Chamando método estático diretamente pela classe
console.log(Pessoa.compararIdades(a, b));
// "Bruno é mais velho."

// Erro se tentarmos chamar pela instância:
// a.compararIdades(); // ❌ TypeError

console.log(Object.keys(Pessoa));          // ['metodoEstatico']
console.log(Object.keys(Pessoa.__proto__)); // ['metodoInstancia']
function conta(nome, sobrenome, agencia, conta, tipo){
    let saldo = 0;
    let limite = this.tipo === 'cc'? 1000: 0;
    
    
    return {
        nome,
        sobrenome,
        agencia,
        conta,
        tipo,

        sacar(valor){
            
            if(valor <= (saldo + limite)){
                return saldo -= valor;
            }
            return 'Saque não permitido!';
        },
        depositar(valor){
            return saldo +=valor;
        },
        get verSaldo(){
            return saldo;
        }
    }
}


const c1 = conta('Diego','Souza',27, 10, 'cc');
c1.depositar(1000);
c1.sacar(1500);
console.log(c1.verSaldo);


console.log(c1.nomeCompleto);
console.log(c1.verSaldo);

function Produto(nome, preco) {
  let valor = preco; // variável privada

  this.nome = nome;

  Object.defineProperty(this, "preco", {
    get: () => valor,
    set: novoValor => {
      if (novoValor > 0) {
        valor = novoValor;
        console.log('Novo valor', valor);
      }
      else console.log("Valor inválido!");
    }
  });
}

const p1 = new Produto("Notebook", 2500);
console.log('Preco',p1.preco); // 2500
p1.preco = 1000 // "Valor inválido!"
console.log(p1.preco);
console.log(p1.valor);

function pessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,

        get nomeCompleto(){
            console.log('Acessou o getter');
            return `${this.nome} ${this.sobrenome}`;
        },
        
        set nomeCompleto(novoNome){
            console.log('Acessou o setter');
            const parteNome = novoNome.split(" ");
            const [primeiro, ... rest] = parteNome;
            this.nome = parteNome[0];
            this.sobrenome = rest.join(' ');
        }
    }
}

const pe1 = pessoa('Diego','Souza');
console.log(pe1.nome);
console.log(pe1.nomeCompleto);

pe1.nomeCompleto = 'Um novo nome'
console.log(pe1.nomeCompleto);
console.log(pe1.sobrenome);


/*
5. Crie a classe Agenda:
 use um array interno contatos
 método adicionar(nome, telefone)
 método remover(nome)
 lançar erro se o nome não existir na lista
 método listar() que mostra todos os contatos
 método buscar(nome) que retorna o contato correspondente
*/


class Agenda{
    // salvar os contatos. Cada um em objetos
    #contatos = [];
   adicionar(nome, telefone){
        this.#contatos.push({nome, telefone})
        return `Contato adicionado`;
    }
    remover(nome){
        const indice = this.#contatos.findIndex(
            contato => contato.nome === nome
        )
        if (indice === -1) {
            throw new Error("Contato não encontrado.");
        }
        this.#contatos.splice(indice, 1);
    }
    listar(){
        this.#contatos.forEach(item => {
            console.log('------------------')
            console.log('Nome: ',item.nome);
            console.log('Telefone: ', item.telefone);
        })
    }
    buscar(nome) {
        const contato = this.#contatos.find(
            contato => contato.nome === nome
        );

        if (!contato) {
            throw new Error("Contato não encontrado.");
        }

        return contato;
    }

}

const c1 = new Agenda();
c1.adicionar('Diego','telefone');
c1.adicionar('Roberto','112233445');
c1.adicionar('Wanda','223344556');
// c1.listar();
console.log(c1.buscar('Wanda'));

console.log(c1);





// class Agenda {
//     #contatos = [];

//     adicionar(nome, telefone) {
//         this.#contatos.push({ nome, telefone });
//     }

//     remover(nome) {
//         const indice = this.#contatos.findIndex(
//             contato => contato.nome === nome
//         );

//         if (indice === -1) {
//             throw new Error("Contato não encontrado.");
//         }

//         this.#contatos.splice(indice, 1);
//     }

//     listar() {
//         return this.#contatos;
//     }

//     buscar(nome) {
//         const contato = this.#contatos.find(
//             contato => contato.nome === nome
//         );

//         if (!contato) {
//             throw new Error("Contato não encontrado.");
//         }

//         return contato;
//     }
// }


// const minhaAgenda = new Agenda();

// minhaAgenda.adicionar('Diego','31991238534');
// minhaAgenda.adicionar('Jose','31909999999');
// minhaAgenda.adicionar('Mario','31909999999');
// minhaAgenda.adicionar('Maria','31909999999');
// console.log(minhaAgenda.listar());
// // console.log(minhaAgenda.buscar('Mario'));
// console.log(minhaAgenda.remover('Maria'));


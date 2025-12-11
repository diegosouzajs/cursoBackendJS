class Curso{
    constructor(nome, duracao, tema){
        this.nome = nome;
        this.duracao = duracao;
        this.tema = tema
        Object.freeze(this.nome);
    }
    mudaNome(novoNome){
        this.nome = novoNome;
    }
}

const js = new Curso('Backend JS', 180, 'Desenvolvimento Web');

// Object.freeze(js);
// js.mudaNome('React Native');

//Copiar objeto
let python = {... js}
python.nome = 'Python'

console.log(js);
console.log(python);
// console.log(js);

// js.mudaNome('React');

// console.log(Object.keys(js)); // pega todas as chaves do meu objeto
// console.log(Object.values(js)); // pega todos os valores do meu objeto
// console.log(Object.entries(js)); // retorna um array de pares chaves/valores
// const novoCurso = {... js};
// novoCurso.nome = 'Python';
// console.log(novoCurso);








// class Curso{
//     constructor(nome, duracao, tema){
//         this.nome = nome;
//         this.duracao = duracao;
//         this.tema = tema;
//     }

//     certificacao(){
//         if(this.duracao < 30) return false;
//         return true;
//     }
//     infoCurso(){
//         let certificacao = this.certificacao() ? 'Com certificação': 'Sem certificação';
//         console.log('Nome:', this.nome);
//         console.log('Duração:', this.duracao);
//         console.log('Certificação:', certificacao);
//     }

// // }

// const javascript = new Curso('Backend JS', 180, 'Desenvolvimento web');
// const git = new Curso('Versionamento com git', 25, 'Desenvolvimento web');



// console.log(javascript.infoCurso());
// console.log(git.infoCurso());
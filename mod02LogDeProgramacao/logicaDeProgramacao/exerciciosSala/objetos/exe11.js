/*
11. Crie um objeto biblioteca que contenha:
 Um array livros
 Um método adicionarLivro(livro)
 Um método buscarPorAutor(nomeAutor)
 Um método listarLivros()
Cada livro deve ser um objeto com titulo, autor e ano.
*/

const biblio = {
    listaLivros: [ {
        autor: 'Bill Gates',
        titulo: 'O Caminho à Frente',
        status: true
    },
    {
        autor: 'Steve Jobs',
        titulo: 'Walter Isaacson',
        status: true
    },
    {
        autor: 'Suzanne Collins',
        titulo: 'A Esperança: O Último Livro de Jogos Vorazes',
        status : false
    }],
    
    adicionarLivro: function(autor, titulo, status){
        this.listaLivros.push({autor: autor, titulo: titulo, status:status })
    },
    buscarAutor: function(autor){
        const autor1 = this.listaLivros.filter((lista)=> lista.autor === autor);
        if (autor1){
            return autor1;
        }else{
            return 'Não há o autor mencionado';
        }
    },
    listarOsLivros: function(){
        console.log('Lista de livros');
        const livros = this.listaLivros.forEach((livro) => {
            const situacao = livro.status === true? 'Disponível para empréstimo':'Livro indisponível';
            // console.log(livro.autor);
            const resposta = `Título: ${livro.titulo}\nAutor: ${livro.autor}\nSituação:${situacao}`;
            console.log('--------------------------------');
            console.log(resposta);
        }) 
    }
}


biblio.adicionarLivro('Gutemberg','Biblía',true);
console.log('--------------------------------');
console.log('Pesquisar livro:',biblio.buscarAutor('Bill Gates'));
console.log('--------------------------------');
biblio.listarOsLivros();
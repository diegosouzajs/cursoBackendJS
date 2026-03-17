function buscarDados(qtd){

    for(let i = 1; i <= qtd; i++){

        fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
            .then((response) => response.json())
            .then((json) => console.log({
                id: json.id,
                name: json.name,
                email: json.email
            }))

    }

}

buscarDados(10)
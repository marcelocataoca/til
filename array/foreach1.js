const aprovados = ['Lucas', 'Thati', 'Alberto', 'Fechalda'];

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`);
})

// aprovados.forEach(item => console.log(item))

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados)


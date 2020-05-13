const alunos = [
    { nome: 'João', nota: 7.2, bolsista: false},
    { nome: 'Maria', nota: 9.5, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: true},
    { nome: 'Luana', nota:8.4, bolsista: false}
]

let dobro = function(a){
    return a * 2;
}

dobro = (a) => {
    return a * 2
}

dobro = a => a * 2
    
const resultado = alunos.map(e => e.nota).reduce(function(acumulador, autal){

})

const funcSomar = (total, item) => total += item
const total = numeros.map(funcMap).reduce(funcSomar)
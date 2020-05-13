for(let word of 'Marcelo'){
    // console.log(word);    
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let chave of assuntosMap.keys()){
    console.log(chave);    
}

for(let value of assuntosMap.values()){
    console.log(value);    
}
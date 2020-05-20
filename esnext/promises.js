const http = require('http')

const getClass = letter => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = ''

            res.on('data', dados => {
                result += dados
            })

            res.on('end', () => {
                try{
                resolve(JSON.parse(result))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}

let names = []
// getClass('A').then(alunos => {
//     names = names.concat(alunos.map(a => `A: ${a.nome}`))
//     getClass('B').then( alunos => {
//       names = names.concat(alunos.map(a => `B: ${a.nome}`))
//       getClass('C').then(alunos => {
//           names = names.concat(alunos.map(a => `C: ${a.nome}`))
//           console.log(names);          
//       })
//     })
// })

Promise.all([getClass('A'), getClass('B'), getClass('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))

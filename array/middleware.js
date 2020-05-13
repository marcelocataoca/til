//test middleware pattern 
const pass1 = (ctx, next) => {
    ctx.valor1 = 'mdl1'
    next()
}

const pass2 = (ctx, next) => {
    ctx.valor2 = 'mdl2'
    next()
}

const pass3 = ctx => ctx.valor3 = 'mdl3'
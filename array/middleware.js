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

//using rest operator 
const test = (ctx, ...middlewares) => {
    const execute = index => {
        middlewares && index < middlewares.length &&
        middlewares[index](ctx, () => execute(index + 1))
    }
    execute(0)
}

const ctx = {}
test(ctx, pass1, pass2, pass3) 
console.log(ctx);

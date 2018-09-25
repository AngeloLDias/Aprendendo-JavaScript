let valor //nao inicializado
console.log(valor)

valor=null //ausencia de valor
console.log(valor)


const produto = {}

console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(pruduto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

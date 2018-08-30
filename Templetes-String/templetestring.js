var nome = "Rebeca"
var concatenacao = "ola " + nome + "!"
var template = `
    olá
    ${nome}!`
console.log(concatenacao, template)
console.log(` 1 + 1 = ${1 + 1}`)

var up = texto => texto.toUpperCase()
console.log(`Ei... ${up("Cuidado")}!`)
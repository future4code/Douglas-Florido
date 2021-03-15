//a) Acessamos os Parametros passados pela linha de código do Node através da função ARGV, na qual as duas primeiras posições são
//exclusivas para o react (sendo as posições argv[0] e argv[1] usadas pelo react)

//b)

const nome = process.argv[2]
const idade = process.argv[3]

if(process.argv[2]===null || process.argv[3] === null){
    console.log("Parametros Incompletos")
}

console.log("Olá, "+nome+"! Você tem "+idade+" anos.")

//c)

let idadeMaisSete = Number(idade)+7

console.log("Olá, "+nome+"! Você tem "+idade+" anos. Em sete anos você terá "+idadeMaisSete)
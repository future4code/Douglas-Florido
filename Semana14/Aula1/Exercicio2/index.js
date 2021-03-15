

const operacao = process.argv[2].toLowerCase()
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

if(process.argv[2]===null || process.argv[3] === null  || process.argv[4] === null  ){
    console.log("Parametros Incompletos")
}


if (operacao === "add") {
    let resultado = num1 + num2
    console.log("\033[Adição: ]" + resultado)

}

else if (operacao === "sub") {
    let resultado = num1 - num2
    console.log("\022[Subtração: ]" + resultado)
}

else if (operacao === "mult") {
    let resultado = num1 * num2
    console.log("Multiplicação: " + resultado)
}

else if (operacao === "div") {
    let resultado = num1 / num2
    console.log("Divisão: " + resultado)

}



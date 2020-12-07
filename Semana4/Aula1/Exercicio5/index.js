// Escreva as funções explicadas abaixo:

// a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado.
// Invoque a função e imprima no console o resultado.

// b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

// c. Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima essa mensagem 10 vezes.
// (não é permitido escrever 10 `console.log` dentro da função, use outra estrutura de código para isso)


function somaDoisValores(num1, num2){
    return num1+num2
}

function primeiroMaiorOuIgual(num1, num2){
    if(num1>=num2){
        return true
    }
    else{
        return false
    }
}

function imprimir10Vezes(mensagem){
    for(i=1;i<=10;i++){
        console.log(mensagem)
    }
}

let num1, num2
num1 = Number(prompt("numero 1:"))
num2 = Number(prompt("numero 2:"))

console.log(somaDoisValores(num1, num2))

if(primeiroMaiorOuIgual(num1,num2)=== true){
    console.log(num1, "é maior ou igual a",num2)
}

else if(primeiroMaiorOuIgual(num1,num2)=== false){
    console.log(num1, "não é maior ou igual a",num2)
}

const mensagem = prompt("escreva uma mensagem")
imprimir10Vezes(mensagem)
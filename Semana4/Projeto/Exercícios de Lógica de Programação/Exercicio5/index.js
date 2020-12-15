
// recebendo dois numeros
const num1 = Number(prompt("Primeiro numero"))

const num2 = Number(prompt("Segundo numero"))

if(num1>num2){
    console.log("O Maior é: "+ num1)
}

else if(num1<num2){
    console.log("O Maior é: "+ num2)
}

else if(num1===num2){
    console.log(num1+" e "+num2+" são iguais")
}

if(num1%num2 === 0){
    console.log(num1+" é divisivel por "+num2)
}
else{
    console.log(num1+" não é divisivel por "+num2)
}

if(num2%num1 === 0){
    console.log(num2+" é divisivel por "+num1)
}
else{
    console.log(num2+" não é divisivel por "+num1)
}

 let diferenca = num1-num2
if(diferenca<0){
    diferenca=diferenca*(-1)
}

console.log("A diferença entre eles é: "+ diferenca)
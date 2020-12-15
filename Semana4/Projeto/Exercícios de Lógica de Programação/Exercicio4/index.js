// recebendo os três Lados
const lado1 = Number(prompt("Tamanho do primeiro lado do Triangulo"))

const lado2 = Number(prompt("Tamanho do segundo lado do Triangulo"))

const lado3 = Number(prompt("Tamanho do terceiro lado do Triangulo"))

if(lado1===lado2 && lado2===lado3){
    console.log("Triangulo equilatero")
}

else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
    console.log("Triangulo isósceles")
}

else{
    console.log("Triangulo Escaleno")
}
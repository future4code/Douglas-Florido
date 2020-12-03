let idade = prompt("Qual sua idade?")
let idade2 = prompt("Qual a idade do seu melhor amigo?")

let resultado, verdade
resultado = Number(idade) - Number(idade2)
if(resultado>=0){
    verdade =true
    console.log(verdade)
    console.log(resultado)
}
else{
    verdade = false
    console.log(verdade)
    console.log(resultado)
}

/* 
    Exercicio 1
    Aparecerá na tela 10
    depois 10 5
    
    Exercicio 2
    Aparecerá na tela 10 10 10
*/


//Exercicios de escrita de código
//Exercicio 1
let nome
let idade
console.log(typeof nome,typeof idade)

//ISso ocorreu pq na o foi definido um valor para ambas as variaveis

//e) + f)

let nome2
let idade2
console.log("Qual seu nome?")
nome2 = "Osvaldo"
console.log("Qual sua idade?")
idade2 = 11

console.log(typeof nome2, typeof idade2)

//percebemos que o typeof verifica o tipo atribuido à variavel, sendo a primeira String e a Segunda Number

console.log("Olá",nome2, ", você tem",idade2,"anos")

//Exercicio 2
console.log("Qual seu filme favorito?")
console.log("Lagoa Azul")

console.log("Qual o animal mais descolado do planeta terra?")
console.log("Rinoceronte")

console.log("Qual universo ficticio vc mais gosta?")
console.log("Milenio 40k, do Warhammer")

console.log("Qual livro voce considera Ruim, mas todo mundo gosta?")
console.log("Pequeno principe")

console.log("Por que não?")
console.log("Porque sim")

//Exercicio 3

let vetorzao = ["Shawarma", "Pastel", "Pizza", "Macarrão", "Carne"] 


//b)
console.log("Essas São minhas comidas preferidas")
console.log(vetorzao[0])
console.log(vetorzao[1])
console.log(vetorzao[2])
console.log(vetorzao[3])
console.log(vetorzao[4])


//c)
vetorzao[0]=window.prompt("Comida Favorita: ")

console.log("Essas São minhas comidas preferidas")
console.log(vetorzao[0])
console.log(vetorzao[1])
console.log(vetorzao[2])
console.log(vetorzao[3])
console.log(vetorzao[4])


//Exercicio 4

let Perguntas = ["Voce é poliglota?", "fala ingles e portugues?", "seus pais são poliglotas?"]
let respostas = [false,true,true]
console.log(Perguntas[0])
console.log(respostas[0])
console.log(Perguntas[1])
console.log(respostas[1])
console.log(Perguntas[2])
console.log(respostas[2])


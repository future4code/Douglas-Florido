//-------------------------------------EXEMPLOS-------------------------------------//

// Exemplo 1 - Função como parâmetro de outra função

// const verificaPar = (num, imprimir) => {
//     if (num % 2 === 0){
//         const resultado = num/2
//         imprimir(resultado)
//     }
// }


// verificaPar(22, (valor) => {
//     console.log("O resultado da sua conta é", valor)
// })


// Exemplo 2 - forEach com array de pokemons
// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama", vida: 0 },
//     { nome: "Charmander", tipo: "fogo", vida: 0 },
//     { nome: "Squirtle", tipo: "água'", vida: 0 }
// ]

// // pokemons[1].vida = 600


// // const callback = (pokemon) => {
// //     pokemon.vida = 1000
// // }

// pokemons.forEach((pokemon) => {
//     pokemon.vida = 1000
// })
// console.log(pokemons)



// Exemplo 3 - map com array de pokemons
// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama", vida: 0 },
//     { nome: "Charmander", tipo: "fogo", vida: 0 },
//     { nome: "Squirtle", tipo: "água'", vida: 0 }
// ]

// // const nomeDosPokemons = ["Bulbasaur", "Charmander", "Squirtle"]

// const nomeDosPokemons = pokemons.map((poke, index, array)=>{
//    return poke.nome
// })

// console.log(pokemons)
// console.log(nomeDosPokemons)



// Exemplo 4 - filter de tipos de pokemons
// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama", vida: 0 },
//     { nome: "Bellsprout", tipo: "grama", vida: 0 },
//     { nome: "Charmander", tipo: "fogo", vida: 0 },
//     { nome: "Vulpix", tipo: "fogo", vida: 0 },
//     { nome: "Psyduck", tipo: "água'", vida: 0 },
//     { nome: "Squirtle", tipo: "água'", vida: 0 }
// ]

// const pokemonsDeGrama = pokemons.filter((poke, index, lista)=>{
//     return poke.tipo === "grama"
// })

// const novoArrayComNomes = pokemonsDeGrama.map((poke, index, lista)=>{
//     return poke.name
// })

// console.log(pokemons)
// console.log(pokemonsDeGrama)


//------------------------------------EXERCÍCIOS------------------------------------//

// Exercício 1 - Impressão de números ímpares usando callback
// const verificaImpar = (num, imprimir) => {
//     if(num % 2 === 1){
//         imprimir()
//     }
// }

// const imprimeMensagem = () => {
//     console.log("É ímpar")
// }


// verificaImpar(21, () => {
//     console.log("É ímpar")
// })


// Exercício 2 - forEach pokecentro
// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama", vida: 0, vidaMaxima: 5000 },
//     { nome: "Charmander", tipo: "fogo", vida: 0, vidaMaxima: 100 },
//     { nome: "Squirtle", tipo: "água'", vida: 0, vidaMaxima: 3000 }
// ]

// pokemons.forEach((poke) => {
//     poke.vida = poke.vidaMaxima
// })

// console.log(pokemons)



// Exercício 3 - map de números
// const numeros = [10, 11, 12, 13, 14, 15]

// const frases = numeros.map((num, index, lista)=>{
//     return `O elemento ${index} é ${num}`
// })

// console.log(numeros)
// console.log(frases)


// Exercício 4 - filter com lista de números
// const numeros = [1, 2, 5, 8, 10, 11, 13, 15, 20]

// const maioresQueDez = numeros.filter((num, index, lista)=>{
//     if (num > 10){
//         return true
//     } else {
//         return false
//     }
// })

// const numerosPares = numeros.filter((num, index, list)=>{
//     return num % 2 === 0
// })

// console.log(numeros)
// console.log("Maiores que 10:", maioresQueDez)
// console.log("Pares:", numerosPares)
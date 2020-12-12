//Em todos os itens deste exercício, você terá que escrever uma função cuja entrada seja um array.
//Para testes, considere: const array = [1, 2, 3, 4, 5, 6].
//a) Escreva uma função que retorne um array com as entradas multiplicadas por 2. Isto é [2, 4, 6, 8, 10, 12].
//b) Escreva uma função que retorne um array com as entradas multiplicadas por 3 e como strings. Isto é: ["3", "6", "9", "15", "18"] 
//c)Escreva uma função que retorne um array de strings dizendo: "${número} é par/impar".
//Isto é: ["1 é impar", "2 é par", "3 é impar", "4 é par", "5 é impar", "6 é par"] 

const array = [1, 2, 3, 4, 5, 6]

console.log(arrayMultPor2(array))
console.log(arrayMultPor3String(array))
console.log(arrayParImpar(array))

function arrayMultPor2(array){
    let i
    let arraySaida = []
    for(i of array){
        arraySaida.push(i*2)
    }

    return arraySaida
}
function arrayMultPor3String(array){
    let i
    let arraySaida = []
    for(i of array){
        arraySaida.push(""+i*3)
    }
    return arraySaida
}

function arrayParImpar(array){
    let i
    let arraySaida = []
    for(i of array){
        if(i%2===0){
            arraySaida.push(i+" é par")
        }
        else{        
            arraySaida.push(i+" é impar")
        }
    }

    return arraySaida

}
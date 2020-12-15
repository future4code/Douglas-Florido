//Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.

//Primeira Forma com for of

console.log("Primeira forma")
let  array = [1, 2, 3, 4, 5]
let i 
for(i of array){
    console.log(i)
}

//Segunda Forma com while

console.log("Segunda forma")
i=0
while(i<array.length){
    console.log(array[i])
    i++
}

//Terceira forma é com for

console.log("Terceira forma")
for(i=0;i<array.length;i++){
    console.log(array[i])
}
const arrayoriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let maior=0, menor=arrayoriginal[0]
let num , i=0
for(num of arrayoriginal){
    if(num>maior){
        maior = num
    }
    if(num<menor){
        menor = num
    }
    
}

console.log(maior)
console.log(menor)


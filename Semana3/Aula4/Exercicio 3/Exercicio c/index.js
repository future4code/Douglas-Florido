const arrayoriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let arraypar = []
let arrayimpar = []
let num
for(num of arrayoriginal){
    
    if(num%2 === 0){
        arraypar.push(num)
    }

    // else{
    //     arrayimpar.push(num)
    // }
    
}

console.log(arraypar)
console.log(arrayimpar)
const arrayoriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let arraystring=[]
let num , i=0
for(num of arrayoriginal){
    
    arraystring[i] = ("O elemento do índex "+i+" é: "+num )
    // else{
    //     arrayimpar.push(num)
    // }
    i++
}

console.log(arraystring)

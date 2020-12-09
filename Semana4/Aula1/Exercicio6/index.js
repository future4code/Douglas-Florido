function tamanhoArray(vetor){
    let retornar = 0
    let i=0
    for(i of vetor){
        retornar++
    }
    return retornar
}

function Epar(num){
    if(num%2===0){
        return true
    }
    else{
        return false
    }
}

function qtdeValoresParesArray(vetor){
    let qtde=0
    let valor
    for(valor of vetor){
        if(valor%2===0){
            qtde++
        }
    }

    return qtde

}

function qtdeValoresParesArrayComFunction(vetor){

    let qtde=0
    let valor
    for(valor of vetor){
        if(Epar(valor)===true){
            qtde++
        }
    }
    return qtde
}
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

console.log(tamanhoArray(array))
console.log(qtdeValoresParesArray(array))
console.log(qtdeValoresParesArrayComFunction(array))
function paresVezesDois(vetor){
    const vetorFinal = []
    let i
    for(i of vetor){
        if(i%2 === 0){
            vetorFinal.push(i*2)
        }
    }
    return vetorFinal
}
function maiorValor(vetor){
    let maior = vetor[0]
    let i
    for(i of vetor){
        if(maior<i){
            maior = i
        }
    }
    return maior
}

function indiceMaiorValor(vetor){
    let tamanho = vetor.length
    let maior = vetor[0]
    let j
    let indice
    for (j = 0; j < tamanho; j++){
        if(maior<vetor[j]){
            maior = vetor[j]
            indice = j
        }
    }
    return indice
}

function inverterVetor(vetor){
    let vetorInvertido = []
    let tamanho = vetor.length
    let i, j=0
    for(i=tamanho-1; i>=0;i-- ){
        vetorInvertido[i] =  vetor[j]
        j++
    }
    return vetorInvertido
}

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

console.log(paresVezesDois(numeros))

console.log(maiorValor(numeros))

console.log(indiceMaiorValor(numeros))

console.log(inverterVetor(numeros))
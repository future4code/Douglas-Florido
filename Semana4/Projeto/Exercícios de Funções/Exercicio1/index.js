// 1. Escreva uma função que receba um `array` de números e imprima na tela o segundo maior e o
//segundo menor número. Em seguida, invoque essa função. (Não é permitido usar funções de ordenação de vetores.)




let  array = [1, 2, 3, 4, 5]
segundoMaiorESegundomenor(array)


function segundoMaiorESegundomenor(vetor){
    let maior=vetor[0]
    let segundoMaior=vetor[1]

    let menor=vetor[0]
    let segundoMenor=vetor[1]

    for(i=2;i<vetor.length;i++){
        if(maior<vetor[i]){
            segundoMaior=maior
            maior=vetor[i]
        }
        if(menor>vetor[i]){
            segundoMenor=menor
            menor=vetor[i]
        }
    }

    console.log("Segundo Maior número:", segundoMaior)
    console.log("Segundo Menor número:", segundoMenor)
}
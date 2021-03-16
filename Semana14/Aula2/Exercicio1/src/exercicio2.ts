function obterEstatisticas(numeros: any) {

    const numerosOrdenados = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// a)Quais são as entradas e saídas dessa função? Copie a função
// para um arquivo .ts e faça a tipagem desses parâmetros

//Entradas: 'numeros
//Saída: a constante estatisticas: q possui maior, menor e media


// b) Que outras variáveis compõem essa função? Explicite a tipagem
// de todas elas

//algumas variaveis auxiliares como soma e num, q servem,
//respectivamente para somar o valor e o num de cada parametro
//do numeros

// c) Crie um *type* para representar uma **amostra** de dados,
// isto é, um objeto com as chaves **numeros** e
// **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse
// tipo, declarado em JavaScript:

let numeros: Array<number> = [77, 43, 85]

let estata = {
    maior: 0,
    menor: 0,
    media: 0,
} 

estata = obterEstatisticas(numeros)

console.log(estata)
"use strict";
function obterEstatisticas(numeros) {
    const numerosOrdenados = numeros.sort((a, b) => a - b);
    let soma = 0;
    for (let num of numeros) {
        soma += num;
    }
    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };
    return estatisticas;
}
let numeros = [77, 43, 85];
let estata = {
    maior: 0,
    menor: 0,
    media: 0,
};
estata = obterEstatisticas(numeros);
console.log(estata);
//# sourceMappingURL=exercicio2.js.map
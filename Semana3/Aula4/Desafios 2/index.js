//Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando".
// Ele deve ser jogado entre duas pessoas. Inicialmente, uma das pessoas insere qual o número em que ela pensou.
// A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número
// fica dando umas dicas para a outra pessoa, 
// indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:



let numerosecreto, chute = 0, i=0

numerosecreto = Number(prompt("Digite o Numero para ser descoberto"))
chute = -numerosecreto

while(chute !== numerosecreto){
    chute = Number(prompt("Chute um numero"))
    console.log("O número chutado foi: " + chute)
    if(numerosecreto > chute){
        console.log("Errrrrrrrou, é maior")
    }

    else{
        console.log("Errrrrrrrou, é menor")
    }
    i++
}

console.log("Parabéns voce acertou o numero secreto que é: " + numerosecreto)
console.log("O Número de tentativas foi: " + i)
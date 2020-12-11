//O Código inicialmente nao funcionava, já que estava faltando o i++ no fim do loop
//fazendo um looping infinito
//além de ser menor ou igual, deveria ser apenas menor, já que estamos considerando o "0" como inicio
const quantidadeDeNumerosPares = 5
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}

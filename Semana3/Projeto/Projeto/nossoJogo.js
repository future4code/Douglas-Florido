/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */



console.log("Bem vindo ao jogo de Blackjack!")
let inicio = true

while(inicio){
   inicio = confirm("Gostaria de Começar mais uma rodada?")
   
   if(inicio) {
      const cartausuario0 = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
      const cartausuario1 = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
      let resusuario = cartausuario0.valor+cartausuario1.valor     
      console.log("Usuário - cartas: "+cartausuario0.texto+" "+cartausuario1.texto+  " - pontuação "+ (resusuario))
      
      const cartacomputador0 = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
      const cartacomputador1 = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros    
      let rescomputador = cartacomputador0.valor+cartacomputador1.valor  
      console.log("Computador - cartas: "+cartacomputador0.texto+" "+cartacomputador1.texto+  " - pontuação "+ (rescomputador))

      if(rescomputador<resusuario){
         console.log("O usuário ganhou!")
      }
      else if(rescomputador===resusuario){
         console.log("Empate!")
      }
      else if(rescomputador>resusuario){
         console.log("O computador ganhou!")
      }      
      
   } else {
      console.log("O Jogo Acabou")
   }
}

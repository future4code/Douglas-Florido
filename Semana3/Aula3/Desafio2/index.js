const nome = prompt("Digite seu nome completo").toLowerCase()
let tipoDoJogo = prompt("Digite o tipo do jogo (IN ou DO)").toLowerCase()
let EtapaDoJogo = prompt("Digite a Etapa do Jogo (SF, DT ou FI)").toLowerCase()
let Categoria = Number(prompt("Categoria do jogo (1 a 4)"))
let qtde = Number(prompt("Quantidade de ingressos"))
let total


    if(EtapaDoJogo === "sf"){
        if(Categoria === 1){
            total = qtde*1320
            
            
        }
        else if(Categoria === 2){
            total = qtde*880
              
        }

        else if(Categoria === 3){
            total = qtde*550
              
        }

        else if(Categoria === 4){
            total = qtde*220
             
        }

    }
    else if(EtapaDoJogo === "dt"){
        if(Categoria === 1){
            total = qtde*660
              
        }
        else if(Categoria === 2){
            total = qtde*440
             

        }

        else if(Categoria === 3){
            total = qtde*330
             
            
        }

        else if(Categoria === 4){
            total = qtde*170
                      
        }
        
    }

    else if(EtapaDoJogo === "fi"){
        if(Categoria === 1){
            total = qtde*1980
             

        }
        else if(Categoria === 2){
            total = qtde*1320
            
        }

        else if(Categoria === 3){
            total = qtde*880
            
            
        }

        else if(Categoria === 4){
            total = qtde*330
            
            
        }
        
    }

    if(tipoDoJogo === "do"){
    console.log("Valor de: R$" +total)
    }
    else{
        console.log("Valor de: $" +total/4.1)
    }






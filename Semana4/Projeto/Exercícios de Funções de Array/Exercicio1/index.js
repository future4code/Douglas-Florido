//Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes propriedades:
//título, ano, diretor e atores/atrizes (lista com pelo menos 2 atores/atrizes).
//Imprima na tela a seguinte string, baseada nos valores do objeto:
//Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e estrelado por ATOR 1,
//ATRIZ 2, ATOR n. A lista de atores/atrizes deve ser impressa inteira, independente do tamanho da lista.

const vetorzao = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

let maioresDeIdade = []
let menoresDeIdade = []

for(let i of vetorzao){
    if(i.idade>=20){
        maioresDeIdade.push(i)
    }
    else{
        menoresDeIdade.push(i)
    }
}

console.log(maioresDeIdade)
console.log(menoresDeIdade)
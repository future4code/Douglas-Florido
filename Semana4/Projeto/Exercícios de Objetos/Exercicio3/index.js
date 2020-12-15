//Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes propriedades:
//título, ano, diretor e atores/atrizes (lista com pelo menos 2 atores/atrizes).
//Imprima na tela a seguinte string, baseada nos valores do objeto:
//Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e estrelado por ATOR 1,
//ATRIZ 2, ATOR n. A lista de atores/atrizes deve ser impressa inteira, independente do tamanho da lista.

const filmeFavorito = {
    titulo: "O Iluminado",
    ano: 1980,
    diretor: "Stanley Kubrick",
    atoresAtrizes: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd", "Scatman Crothers"]
}

console.log("Venha assistir ao filme "+filmeFavorito.titulo+", de "+filmeFavorito.ano+", dirigido por "+ filmeFavorito.diretor+"e estrelado por")

for(let nome of filmeFavorito.atoresAtrizes){
    console.log(nome)
}
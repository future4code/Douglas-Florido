//a) Como você faria, já com a extensão instalada, para
//gerar um arquivo javascript a partir do  arquivo typescript
//com o código abaixo?

// type pokemon {
// 	name: string,
//   types: string,
// 	healthPoints: number
// }

// const pokemon1: pokemon = {
//   name: "Charmander",
//   types: "Fire",
//   healthPoints: 28
// }

// const pokemon2: pokemon = {
//   name: "Bulbasaur",
//   types: "Grass/Poison",
//   healthPoints: 31
// }

// const pokemon2: pokemon = {
//   name: "Squirtle",
//   types: "Water",
//   healthPoints: 35
// }

//R: buildaria ele através do package.json, usando um
//"build": "tsc", depois "node ./nomeDoArquivo"


//b) E se este arquivo estivesse dentro de uma pasta chamada
//src. O processo seria diferente? Se sim, descreva as
//diferenças.
//R: sim, poderiamos passar os in e outs dentro do tsconfig, mas 
//ainda teriamos q buildar e dar o node para funcionar

//c) Existe alguma maneira de **transpilar** múltilplos arquivos
//de uma vez só? Caso conheça, explique como fazer.
//R:só utilizar o TSC com o nome de vários arquivos! seguidos 
//de Espaço

//d) Compare esse arquivo com o que criamos durante a aula
// (ele está disponível na área de configuração do projeto ali
// em cima). Leia as descrições sobre cada uma das
// propriedades. Alguma configuração que chamou sua atenção?
// O que mudou em comparação com o arquivo criado pelos
// slides?

// aparentemente a unica mudança desse para o com varios
// é o tsc com todos os arquivos, buildando todos e dando
// node em todos ao mesmo tempo!!

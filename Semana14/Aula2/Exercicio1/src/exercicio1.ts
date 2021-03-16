//a) Crie uma variável minhaString do tipo string
//e atribua um valor a ela. Tente atribuir um número
//a esta variável. O que acontece?

//r: o Visual Code nao deixa rodar o programa, pq o tipo da 
//variavel que declarei nao condiz com o q estou

// let minhaString: string;

// minhaString = 100

//b) Crie uma variável meuNumero do tipo number e atribua
//um valor numérico. Como podemos fazer para que essa variável
//também aceite strings?

//r: para que ela também aceite Strings colocamos | string

// let meuNumero: number | string;
// meuNumero = 6

// c) Agora crie um novo objeto. Este objeto é uma pessoa,
//e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES_DO_ARCO_IRIS,
    
}

enum CORES_DO_ARCO_IRIS {
    VERMELHO = "VERMELHO",
    AMARELO = "AMARELO",
    LARANJA = "LARANJA",
    VERDE = "VERDE",
    AZUL = "AZUL",
    ANIL = "ANIL",
    VIOLETA = "VIOLETA",

}

let João: pessoa = {

    nome: "joão josé da joaquina",
    idade: 35,
    corFavorita: CORES_DO_ARCO_IRIS.VERDE,
}


let Maria: pessoa = {
    
    nome: "Maria Joaquina do Cirilo",
    idade: 18,
    corFavorita: CORES_DO_ARCO_IRIS.VERMELHO,
}


let Picorélio: pessoa = {
    
    nome: "Pico Picorés Carva",
    idade: 89,
    corFavorita: CORES_DO_ARCO_IRIS.ANIL,
}
function imprimirNome() {
    console.log("Eu sou Douglão, Tenho 25 anos, cara de 15 e articulações de 85, moro em Curitoba city e sou estudante (por enquanto)")
}

imprimirNome()

function imprimirNomeComParametros(){
    let nome, idade, cidade, estudante
    nome = prompt("Informe seu nome")
    idade = Number(prompt("Informe sua idade"))
    cidade = prompt("Informe sua cidade")
    estudante = Boolean(confirm("Informe se é estudante ou não"))
    if(estudante === true){
        console.log("Eu sou",nome+", tenho", idade, "anos, moro em", cidade, "e sou estudante")
    }
    else{
        console.log("Eu sou",nome+", tenho", idade, "anos, moro em", cidade, "e não sou estudante")
    }
}

imprimirNomeComParametros()

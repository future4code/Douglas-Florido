let turno = prompt("Digite o turno da sua aula")
switch (turno){
    case "M":
        console.log("Bom dia!")
        break;

    case "V":
        console.log("Boa tarde!")
        break;
    
    case "N":
        console.log("Boa noite!")
        break;
    default:
        console.log("Digite M, V ou N")
        break;
}


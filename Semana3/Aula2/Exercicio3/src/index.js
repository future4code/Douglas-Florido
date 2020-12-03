let vetor = [0, 0, 0]
let num
listaDeTarefas = vetor
listaDeTarefas[0] = prompt("Informe uma tarefa")
listaDeTarefas[1] = prompt("Informe uma tarefa")
listaDeTarefas[2] = prompt("Informe uma tarefa")


num = Number(prompt("informe um numero de 0 a 2"))
vetor.splice(num, 1)
console.log(vetor)


function addTask() {
    let input = document.getElementById('tarefa')
    let inputValue = input.value    
  
    let select = document.getElementById ('dias-semana')
    let selectValue = select.value    
  
    let div = document.getElementById(selectValue)
    div.innerHTML += `<p>${inputValue}</p>`

    tarefa.value = ""
  }
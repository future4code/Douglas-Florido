let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    // AQUI VEM A IMPLEMENTAÇÃO
    // console.log(despesas)
    despesas.forEach(despesa => {
        divDespesas.innerHTML += `<div><u>Valor: R$${despesa.valor} | Tipo: ${despesa.tipo} | Descrição: ${despesa.descricao}</u></div>`
    });
        
}


// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // AQUI VEM A IMPLEMENTAÇÃO

    let gasto = arrDespesas.forEach((gasto) =>{
        if(gasto.tipo === "alimentação"){
            gastoAlimentacao+=gasto.valor
        }
        else if(gasto.tipo === "utilidades"){
            gastoUtilidades +=gasto.valor
        }
        else if(gasto.tipo === "viagem"){
            gastoViagem +=gasto.valor
        }
        gastoTotal += gasto.valor
    })

    // const gasto = arrDespesas.map((gasto)=>{
    //     return gasto.valor
    // })
    // let i=0

    // for(i of gasto){
    //     gastoTotal+=i
    // }


    // let alimentacao = arrDespesas.filter((valor)=>{
    //     return valor.tipo === "alimentação"
    // })
    
    

    

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`

    
    
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)

    console.log(arrDespesas)

    let despesasFiltradas // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO

    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    if(tipoFiltro === "todos"){
        arrDespesas.forEach(elemento => {
            
            
            if(elemento.valor>=valorMin && elemento.valor<=valorMax){
                divDespesas.innerHTML += `<div><u>Valor: R$${elemento.valor} | Tipo: ${elemento.tipo} | Descrição: ${elemento.descricao}</u></div>`
                console.log(elemento)
            }
            
            
        });               
    }
    else if(tipoFiltro === "alimentação"){
        // console.log("entrei alimentação")

    }
    else if(tipoFiltro === "utilidades"){
        // console.log("entrei utilidades")

    }
    else if(tipoFiltro === "viagem"){
        // console.log("entrei viagem")

    }

    // imprimirDespesas(despesasFiltradas)
}







// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}
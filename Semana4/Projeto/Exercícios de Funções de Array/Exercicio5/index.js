// Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa,
// você precisa entender como eles guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes,
// o saldo total e uma lista contendo todas as compras realizadas pelo cliente. Veja abaixo:

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

// A sua tarefa é: faça uma função que receba um **array** com os objetos do tipo acima e atualize
// o **saldo total** individual de cada um, **sem criar um novo** array.
// Em outras palavras, o array do exemplo acima deve ficar assim:

    // [ 
    // 	{ cliente: 'João', saldoTotal: 400, compras: [ 100, 200, 300 ] },
    // 	{ cliente: 'Paula', saldoTotal: 6260, compras: [ 200, 1040 ] },
    //   { cliente: 'Pedro', saldoTotal: -3340, compras: [ 5140, 6100, 100, 2000 ] },
    //   { cliente: 'Luciano', saldoTotal: -1900, compras: [ 100, 200, 1700 ] },
    //   { cliente: 'Artur', saldoTotal: 1300, compras: [ 200, 300 ] },
    //   { cliente: 'Soter', saldoTotal: 1200, compras: [] } 
    // ]


function atualizarSaldoTotal(array){
    array.forEach(valor => {
        let despesa = 0
        let i
        for(i of valor.compras){
            despesa+=i
        }
        valor.saldoTotal=valor.saldoTotal-despesa        
    });
    return array
}

console.log(atualizarSaldoTotal(contas))
//Você foi contratado por um escritório médico para gerar e-mails automáticos para seus clientes, lembrando-os de sua consulta marcada;
//ou avisa-los que foi cancelada. Considere, então, essas consultas:

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

//A sua tarefa é criar um array com os e-mails para cada um deles. Existem dois padrões de e-mail. 
//Para as consultas **não canceladas** é:

    //Olá, ${ Sr./Sra. } ${ nome da pessoa }. Estamos enviando esta mensagem para
    //${ lembrá-lo / lembrá-la } da sua consulta no dia ${ data da consulta }. Por favor, acuse
    //o recebimento deste e-mail.


//Para as consultas canceladas é:

    //Olá, ${ Sr./Sra. } { nome da pessoa }. Infelizmente, sua consulta marcada
    // para o dia ${ data da consulta } foi cancelada. Se quiser, pode entrar em 
    // contato conosco para remarcá-la


let consultasNormais = []
let consultasCanceladas = []
let i

for(i of consultas){
    if(i.cancelada === true){
        if(i.genero === "masculino"){
            consultasCanceladas.push("Olá, Sr. "+ i.nome+". Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia "+
            i.dataDaConsulta+". Por favor, acuse o recebimento deste email")
        }
        else{
            consultasCanceladas.push("Olá, Sra. "+ i.nome+". Estamos enviando esta mensagem para lembrá-la da sua consulta no dia "+
            i.dataDaConsulta+". Por favor, acuse o recebimento deste email")

        }
    }
    else{
        if(i.genero === "masculino"){
            consultasNormais.push("Olá, Sr. "+ i.nome+". Infelizmente, sua consulta marcada para o dia "+
            i.dataDaConsulta+". foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la")
        }
        else{
            consultasNormais.push("Olá, Sra."+ i.nome+". Infelizmente, sua consulta marcada para o dia "+
            i.dataDaConsulta+". foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la")

        }
    }
}
console.log(consultasCanceladas)
console.log(consultasNormais)
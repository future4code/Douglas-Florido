import React from 'react'
import axios from 'axios'

export class Bored extends React.Component {
    state = {
        atividade: '',
        qtdePessoas: '',
        tipo: '',
        acessibilidade: '',
        preco: ''
    }

    listarBored = () =>{
        axios.get('http://www.boredapi.com/api/activity/')
       .then((res) => {
           console.log(res)
           this.setState({atividade: res.data.activity})
           this.setState({qtdePessoas: res.data.participants})
           this.setState({tipo: res.data.type})
           this.setState({acessibilidade: res.data.accessibility})
           this.setState({preco: res.data.price})
           

       }).catch((err) => {
           console.log(err)
       })
       }

    componentDidMount = () => {
        this.listarBored();
    };

     

    render(){
        const componente = this.listarBored
    return(
        <div>        
        <p>Atividade: {this.state.atividade}</p>
        <p>Quantidade de Pessoas: {this.state.qtdePessoas}</p>
        <p>Tipo: {this.state.tipo}</p>
        <p>Acessibilidade: {this.state.acessibilidade}</p>
        <p>Preço: {this.state.preco}</p>
        </div>
    )
    }
}


export default Bored;
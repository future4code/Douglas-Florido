import React from 'react'
import './App.css';
import Msg from './Msg/Msg'
import { useRef } from 'react';
import useDoubleClick from 'use-double-click';

// export default deletarMensagem()

class App extends React.Component {

  state = {
    mensagens: [
      { nome: "Diego", mensagem: "bla" },
      { nome: "Douglas", mensagem: "bla1" }
    ],
    valorNome: "",
    valorMensagem: "",
  }

  deletarMensagem = (item) =>{
    console.log("doubleClicando")
    console.log(item)
    const mensagensAtuais = this.state.mensagens;
    const novaLista = mensagensAtuais.filter((valor) => {
      console.log(valor)

      return !(valor.nome === item.nome && valor.mensagem === item.mensagem) ;
      });
    console.log(novaLista)
    this.setState({ mensagens: novaLista });

  }

  adicionarMensagem = () => {

    const novaMensagem = {
      nome: this.state.valorNome,
      mensagem: this.state.valorMensagem
    }
    const novoArrayMensagens = [... this.state.mensagens, novaMensagem]
    this.setState({ mensagens: novoArrayMensagens })
    console.log(novoArrayMensagens)
    // this.setState({ valorNome: "" })
    this.setState({ valorMensagem: "" })
    
  }

  onChangeInputNome = event => {
    this.setState({ valorNome: event.target.value })
  }
  onChangeInputMensagem = event => {
    this.setState({ valorMensagem: event.target.value })          
  }

  onKeyDownEnter = event =>{
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      this.adicionarMensagem();
    }
  }


  render() {
    const listaDeMensagens=this.state.mensagens.map((msg)=>{
      return(
        <div>
        <Msg nome={msg.nome} mensagem={msg.mensagem} funcao={() => this.deletarMensagem(msg)}/>
        
        </div>
      )
    })
    return (

      <div className="containerGrandao">

        <div className="containerTexto">
        {listaDeMensagens}
        </div>


        <div className="containerInputs">
          <input id="inputEnviar"
            onChange={this.onChangeInputNome}            
            value={this.state.valorNome}
            onKeyDown={this.onKeyDownEnter}
          />
          <input id="inputMsg"
            onChange={this.onChangeInputMensagem}
            value={this.state.valorMensagem}
            onKeyDown={this.onKeyDownEnter}
          />
          <button onClick={this.adicionarMensagem}>Adicionar</button>
        </div>
      </div>

    );
  }

}

export default App;
// export default deletarMensagem()
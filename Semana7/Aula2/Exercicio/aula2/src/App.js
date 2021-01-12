import React from "react";
import logo from './logo.svg';
import axios from "axios";
import './App.css';

class App extends React.Component{

  state = {
    usuarios: [],
    usuarioValue: "",
    emailValue: ""  
  };

  pegarTodosUsuarios = ()=>{
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
      headers: {
        Authorization: "douglas-florido-epps"
      }
    }).then((resposta) => {
      this.setState({ usuarios: resposta.data.result.list });
    }).catch((erro)=>{
      console.log(erro.message)
    })
  }

  criarUsuario = () =>{
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "douglas-florido-epps"
      }
    }).then((resposta) =>{
      
    })
  }

  onChangeUsuarioValue = (event)=>{
    this.setState({usuarioValue: event.target.value});
    console.log(usuarioValue);
  }
  
  onChangeEmailValue = (event)=>{
    this.setState({emailValue: event.target.value});
    console.log(emailValue);
    
  }

  
  render(){
  return (
    <div>
    <div>
      

      <div class="caixona">
        <p>Nome:</p><input></input>

        <p>E-mail:</p><input></input>
        <button>Salvar</button>
      </div>
    </div>
    <div>
    <button onClick={this.pegarTodosUsuarios}>Ir para Página de Lista</button>
  </div>
  </div>
  );
  }
}

export default App;

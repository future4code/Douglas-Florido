import React from "react";
import axios from "axios";

export class Registrar extends React.Component{

    state = {
        usuarios: [],
        usuarioValue: "",
        emailValue: "",
         
      };  

    onChangeInputNome = (event) => {
        this.setState({usuarioValue: event.target.value})
      }
      
      onChangeInputEmail = (event) => {
        this.setState({emailValue: event.target.value})
      }

      criarUsuario = () =>{
        const body = {
          name: this.state.usuarioValue,
          email: this.state.emailValue
        }
      
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, 
        {headers: {
          Authorization:"douglas-florido-epps"
        }}).then((res) => {
          alert("Usuário criado com sucesso!!")
          this.setState({inputName: '', inputEmail: ''})
        })
        .catch((err) => {
          console.log(err)
        })
      }

    render(){
        return(
            <div>
            <h2>Adicione um novo usuario</h2>
            <input placeholder="Nome" value={this.state.usuarioValue} onChange={this.onChangeInputNome}></input>
            <input placeholder="E-mail" value={this.state.emailValue} onChange={this.onChangeInputEmail}></input>
            <button onClick={this.criarUsuario()}>Salvar</button>
            </div>
        )
    }
}
import React from "react";
import logo from './logo.svg';
import axios from "axios";
import './App.css';
import { Registrar } from "./Componentes/Registrar";
import { Listar } from "./Componentes/Listar";

class App extends React.Component{

  state = {
    usuarios: [],
    usuarioValue: "",
    emailValue: "",
    pagina: true  
  };  
  

  

  mudarPagina = () =>{
    this.setState({pagina: !this.state.pagina})
  }
  
  render(){
    
          
    
  return (
    <div>
      <button onClick={this.mudarPagina}>Mudar de Página</button>
      {this.state.pagina ? <Registrar /> : <Listar />}
      
    </div>
  );
  }
}

export default App;

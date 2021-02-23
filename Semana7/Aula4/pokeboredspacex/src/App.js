import logo from './logo.svg';
import './App.css';
import React from "react"
import axios from "axios"
import { Poke } from './Páginas/Poke.js'
import { Bored } from './Páginas/Bored.js'
import { Spacex } from './Páginas/Spacex.js'


class App extends React.Component {
  state = {
    valor: 0
  }
  valorBotao = 0;

  mudarPagina = (compara) => {
    console.log(compara)
    if (this.state.valor === compara) {
      this.setState({ valor: 0 })
    }
    else if (compara === 1) {
      this.setState({ valor: 1 })
    }
    else if (compara === 2) {
      this.setState({ valor: 2 })

    }
    else if (compara === 3) {
      this.setState({ valor: 3 })
    }
  }

  retornaComponente = () => {
    switch (this.state.valor){
      case 1:
        return <Bored/>
      case 2:
        return <Poke/>
      case 3:
        return <Spacex/>
      default:    
        return null          
    }
  }


  render() {
    const componente = this.retornaComponente()
    
    return (
      <div>
        <h1>
             PokeBoredSpaceX
        </h1>
        
          <button onClick={() => this.mudarPagina(this.valorBotao = 1)}>Bored</button>
          <button onClick={() => this.mudarPagina(this.valorBotao = 2)}>Poke</button>
          <button onClick={() => this.mudarPagina(this.valorBotao = 3)}>SpaceX</button>
          {componente}
      </div>

    )
    // if (this.state.valor === 0) {
    //   return (

    //     <div>
    //       <h1>
    //         PokeBoredSpaceX
    // </h1>

    //       <button onClick={() => this.mudarPagina(this.valorBotao = 1)}>Bored</button>
    //       <button onClick={() => this.mudarPagina(this.valorBotao = 2)}>Poke</button>
    //       <button onClick={() => this.mudarPagina(this.valorBotao = 3)}>SpaceX</button>

    //     </div>
    //   );
    // }
    // else if (this.state.valor === 2) {
    //   return (
    //     <div>
    //       <h1>
    //         PokeBoredSpaceX
    // </h1>

    //       <button onClick={() => this.mudarPagina(this.valorBotao = 1)}>Bored</button>
    //       <button onClick={() => this.mudarPagina(this.valorBotao = 2)}>Poke</button>
    //       <button onClick={() => this.mudarPagina(this.valorBotao = 3)}>SpaceX</button>

    //       <Poke />
    //     </div>
    //   );
    // }

    // else if (this.state.valor === 1) {
    //   return (
    //     <div>
    //       <h1>
    //         PokeBoredSpaceX
    // </h1>

    //       <button onClick={() => this.mudarPagina(this.valorBotao = 1)}>Bored</button>
    //       <button onClick={() => this.mudarPagina(this.valorBotao = 2)}>Poke</button>
    //       <button onClick={() => this.mudarPagina(this.valorBotao = 3)}>SpaceX</button>

    //       <Bored />
    //     </div>
    //   );
    // }

    // else if (this.state.valor === 3) {
    //   return (
    //     <div>
    //       <h1>
    //         PokeBoredSpaceX
    // </h1>

    //       <button onClick={() => this.mudarPagina(this.valorBotao = 1)}>Bored</button>
    //       <button onClick={() => this.mudarPagina(this.valorBotao = 2)}>Poke</button>
    //       <button onClick={() => this.mudarPagina(this.valorBotao = 3)}>SpaceX</button>

    //       <Spacex />
    //     </div>

    //   );
    // }

  }
}

export default App;

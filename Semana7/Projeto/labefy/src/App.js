import logo from './logo.svg';
import React from "react";
import './App.css';
import Listar from './Componentes/Listar.js'
import CriarPlaylist from './Componentes/CriarPlaylist.js'
import AdicionarTrack from './Componentes/AdicionarTrack.js'



class App extends React.Component {
  render(){
  return (
    <div>
      <h1>Labefy</h1>
      <CriarPlaylist></CriarPlaylist>
      <Listar></Listar>

    </div>
  );
}
}

export default App;

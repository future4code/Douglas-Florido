import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import carolzete from './img/carolzete.png';
import joselindo from './img/Joselindo.jpg';
import felipe from './img/Felipe.png';



const informacoesPost = [
  {nomeUsuario: 'Carolzete', fotoUsuario: carolzete, fotoPost: 'https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1'},
  { nomeUsuario: 'Joselindo Comunista',  fotoUsuario: joselindo, fotoPost: 'https://images.unsplash.com/photo-1601758260679-259d3f79c9a1?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
  { nomeUsuario:'Felipe Moura Brasil', fotoUsuario:felipe, fotoPost: 'https://images.unsplash.com/photo-1608085575984-d61d8335340e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }  
];

informacoesPost.map(function(i) {
  return <Post i/>
});




class App extends React.Component {
  state = {
    // informacoesPost = [
    //   {nomeUsuario: 'Carolzete', fotoUsuario: carolzete, fotoPost: 'https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1'},
    //   { nomeUsuario: 'Joselindo Comunista',  fotoUsuario: joselindo, fotoPost: 'https://images.unsplash.com/photo-1601758260679-259d3f79c9a1?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
    //   { nomeUsuario:'Felipe Moura Brasil', fotoUsuario:felipe, fotoPost: 'https://images.unsplash.com/photo-1608085575984-d61d8335340e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }  
    // ],
    valorInputNome: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  adicionaPost = () => {
    // Pega valor que está no input. Repare que puxamos
    // esse valor do estado. Ele está lá porque toda vez que um
    // valor é digitado, atualizamos o estado
    const nome = this.state.valorInputPessoa;
    
    const fotoUsuario = this.state.valorInputFotoUsuario

    const fotoPost = this.state.valorInputFotoPost

    // Define o estado "pessoas" como a variavel "novoPessoas"
    // this.setState({ pessoas: novoPessoas });
  };

  render() {
    const informacoesPost = [
      {nomeUsuario: 'Carolzete', fotoUsuario: carolzete, fotoPost: 'https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1'},
      { nomeUsuario: 'Joselindo Comunista',  fotoUsuario: joselindo, fotoPost: 'https://images.unsplash.com/photo-1601758260679-259d3f79c9a1?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
      { nomeUsuario:'Felipe Moura Brasil', fotoUsuario:felipe, fotoPost: 'https://images.unsplash.com/photo-1608085575984-d61d8335340e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }  
    ];
    
    const listaDeInformacoes = informacoesPost.map(pessoa => {
    return(<Post 
            nomeUsuario = {pessoa.nomeUsuario}
            fotoUsuario = {pessoa.fotoUsuario} 
            fotoPost = {pessoa.fotoPost}
        />)    
    })

    return (
      
      <div className={'app-container'}>
            
      {listaDeInformacoes}

      <input value={this.state.valorInputNome}/>
      <input value={this.state.valorInputNome}/>
      <input value={this.state.valorInputNome}/>
      <button onClick={this.adicionaPost}>Adicionar</button>
        
      </div>
    );
  }
}

export default App;

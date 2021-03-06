import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import carolzete from './img/carolzete.png';
import joselindo from './img/Joselindo.jpg';
import felipe from './img/Felipe.png';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Carolzete'}
          fotoUsuario={carolzete}
          fotoPost={'https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}
        />    
      
        <Post
          nomeUsuario={'Joselindo Comunista'}
          fotoUsuario={joselindo}
          fotoPost={'https://images.unsplash.com/photo-1601758260679-259d3f79c9a1?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
        />

        <Post
          nomeUsuario={'Felipe Moura Brasil'}
          fotoUsuario={felipe}
          fotoPost={'https://images.unsplash.com/photo-1608085575984-d61d8335340e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
        />
      </div>
    );
  }
}

export default App;

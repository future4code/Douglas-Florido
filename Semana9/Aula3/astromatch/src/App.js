import './App.css';
import React, {useState, useEffect} from 'react'
import { render } from '@testing-library/react';
import Header from "./Components/Header/Header.js"
import Body from "./Components/Body/Body.js"
import Footer from "./Components/Footer/Footer.js"
import Contatos from "./Components/Contatos/Contatos.js"

export function App(){
  //quando Pagina = true, vai pra inicial, quando pagina = false vai pra contatos
  const[page, setPage] = useState(false)
  

  const changePage = () => {
    const contrario = !page
    setPage(contrario)     
    console.log(contrario)
  }   

  useEffect(() => {
  }, [page])

    if (page) {
      return (
        <div>
          <Header changePage={changePage} pagina={page}></Header>
          <Body></Body>

        </div>
      );
    }

    else{
      return(
        <div>
          <Header changePage={changePage} pagina={page}></Header>
          <Contatos/>
        </div>
      )
    }
  }


export default App;

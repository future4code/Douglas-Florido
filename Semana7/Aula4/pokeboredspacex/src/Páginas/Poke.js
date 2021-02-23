import React from 'react'
import axios from 'axios'


export class Poke extends React.Component {
    state = {
        pokemons: [],
        pokeNome: '',
        pokeFoto: ''
    }

    listarPoke = () =>{
     axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then((res) => {
        console.log(res)
        this.setState({pokemons: res.data.results})
        
        
    }).catch((err) => {
        console.log(err)
    })
    }

    // pegarFotoPoke = (nome) => {
    //     axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    //     .then((res) => {
    //         this.setState({pokeFoto: res.data.sprites.front_default})
    //     })
    //     .catch((err) => console.log(err))
    // }

    
    componentDidMount = () => {
        this.listarPoke();
    };
    render(){
        
    return(
        <div>
        {this.state.pokemons.map((pk) => {
            return (
                // const foto = this.pegarFotoPoke(pk.name)

                <div>
                    <p>{pk.name}</p>
                    
                                  
                </div>
            )
        })}
        </div>
    )
    }
}


export default Poke;

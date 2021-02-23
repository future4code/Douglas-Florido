import React from "react";
import axios from "axios";
import { render } from "@testing-library/react";

export class AdicionarTrack extends React.Component{
    state = {

        nomeMusica: "",
        nomeArtista: "",
        linkMusica: ""
    }

    onChangeNomeMusicaValue = (event) => {
        this.setState({nomeMusica: event.target.value})
    }

    onChangeNomeArtistaValue = (event) => {
        this.setState({nomeArtista: event.target.value})
    }

    onChangeNomeLinkMusicaValue = (event) => {
        this.setState({linkMusica: event.target.value})

    }

    render(){
        return(
            <div>
                <h5>Nome da Música</h5>
                <input
                placeholder="Digite aqui"
                value={this.state.nomeMusica}
                onChange={this.onChangeNomeMusicaValue}
                />

                <h5>Nome do Artista</h5>
                <input
                placeholder="Digite aqui"
                value={this.state.nomeArtista}
                onChange={this.onChangeNomeArtistaValue}
                />

                <h5>Link da Música</h5>
                <input
                placeholder="Digite aqui"
                value={this.state.linkMusica}
                onChange={this.onChangeNomeLinkMusicaValue}
                />
                <button></button>
            </div>
        )
    }
}

export default AdicionarTrack;
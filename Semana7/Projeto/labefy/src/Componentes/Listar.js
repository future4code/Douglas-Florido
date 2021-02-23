import React from "react";
import axios from "axios";
import AdicionarTrack from './AdicionarTrack.js'


export class Listar extends React.Component {
    state = {
        playlists: [],
        tracks: [],
        idAddTrack: "",
        nomeMusica: "",
        nomeArtista: "",
        linkMusica: ""
    }

    getAllPlaylists = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: 'douglas-florido-epps'
            }
        }).then((res) => {
            // console.log(res)
            this.setState({ playlists: res.data.result.list })



        }).catch((err) => {
            console.log(err)
        })
    }

    getPlaylistTracks = (id) => {
        // console.log(id)
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
            headers: {
                Authorization: 'douglas-florido-epps'
            }
        }).then((res) => {
            // console.log(res)
            console.log(res.data.result.tracks)
            this.setState({ tracks: res.data.result.tracks })



        }).catch((err) => {
            console.log(err)
        })

    }

    addTrackToPlaylist = (id) => {

        const body = {
            
                name: this.state.nomeMusica, 
                artist: this.state.nomeArtista,
                url: this.state.linkMusica
            
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body,
        {
            headers: {
                Authorization: 'douglas-florido-epps'
            }
        }
            
        ).then((res)=>{
            console.log(res)
            this.setState({nomeMusica: ""})
            this.setState({ nomeArtista: ""})
            this.setState({linkMusica: ""})
            
        }).catch((err)=>{
            console.log(err)
        })

    }



    onChangeSelect = (event) => {
        // console.log(event.target.value)
        this.setState({ idAddTrack: event.target.value })
        this.getPlaylistTracks(event.target.value)
    }

    onChangeNomeMusicaValue = (event) => {
        this.setState({ nomeMusica: event.target.value })
    }

    onChangeNomeArtistaValue = (event) => {
        this.setState({ nomeArtista: event.target.value })
    }

    onChangeNomeLinkMusicaValue = (event) => {
        this.setState({ linkMusica: event.target.value })

    }

    componentDidMount = () => {
        this.getAllPlaylists()
    }

    render() {

        return (
            <div>
                <div>
                    Playlists
                </div>

                <select onChange={this.onChangeSelect}>
                    <option value={""}></option>
                    {this.state.playlists.map((playlist) => {
                        return (
                            <option value={playlist.id}>{playlist.name}</option>
                        )

                    })}

                </select>


                {this.state.tracks.map((track) => {
                    return (
                        <div>
                            <h4>{track.artist}</h4>
                            <h5>{track.name}</h5>
                            <audio controls>
                                <source src={track.url} />
                            </audio>
                            <hr />

                        </div>


                    )

                })}

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
                    <button onClick={this.addTrackToPlaylist(this.state.idAddTrack)}>Adicionar</button>
                </div>
            </div>
        )


    }


}

export default Listar;
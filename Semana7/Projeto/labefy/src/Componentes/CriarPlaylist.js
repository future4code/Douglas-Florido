import React from "react";
import axios from "axios";
import { render } from "@testing-library/react";

export class CriarPlaylist extends React.Component{
    state = {
        nomePlaylist: ""
    }

    addPlaylist = () =>{
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
            
                name: this.state.nomePlaylist
            
        },
        {
            headers: {
                Authorization: "douglas-florido-epps"
            }
        }).then((res)=>{
            console.log(res)
            this.setState({ nomePlaylist: ""})
        }).catch((err)=>{
            console.log(err)
        })
    }

    onChangePlaylistValue = (event) =>{
        this.setState({ nomePlaylist: event.target.value})        

    }


    render(){
        return(
            <div>
                <input 
                placeholder="Digite o Nome da Playlist"                
                value={this.state.nomePlaylist}
                onChange={this.onChangePlaylistValue}                
                />
                

                <button onClick={this.addPlaylist}>Criar</button>
            </div>
        )
    }
}

export default CriarPlaylist;
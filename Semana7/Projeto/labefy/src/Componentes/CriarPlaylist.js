import React from "react";
import axios from "axios";
import { render } from "@testing-library/react";

export class CriarPlaylist extends React.Component{

    render(){
        return(
            <div>
                <input placeholder="Nome Playlist"></input><button>Criar Playlist</button>
            </div>
        )
    }
}

export default CriarPlaylist;
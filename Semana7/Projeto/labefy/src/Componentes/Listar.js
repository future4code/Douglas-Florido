import React from "react";
import axios from "axios";

export class Listar extends React.Component{
    state={
        playlists: [],
        tracks: [],
    }
    
    getAllPlaylists = () =>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers:{
                Authorization: 'douglas-florido-epps'
            }
        }).then((res) =>{
            // console.log(res)
            this.setState({playlists: res.data.result.list})
            

        }).catch((err) =>{
            console.log(err)
        })
    }

    getPlaylistTracks = (id) =>{
        console.log(id)
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
            headers:{
                Authorization: 'douglas-florido-epps'
            }
        }).then((res) =>{
            // console.log(res);
            this.setState({tracks: res.data.result})
           
           

        }).catch((err) =>{
            console.log(err)
        })

    }

    // escreveP = ()=>{
    //     return(<p>teste</p>)
    // }



    componentDidMount = () => {
        this.getAllPlaylists()
    }

    render(){
        return(
            <div>
                Playlists    
                {/* {this.escreveP()}   */}
                        
            {this.state.playlists.map((playlist)=>{
                return(
                    <div>                        
                        <p>{playlist.name}</p><button >Deletar</button><button onClick={()=>{this.getPlaylistTracks(playlist.id)}}>Musicas</button>
                        
                    </div>

                )
            })}
            
            {/* {this.state.tracks.map((track)=>{
                <p>{track.name}</p>
            })} */}

                
            </div>
            
        )

    }
}

export default Listar;
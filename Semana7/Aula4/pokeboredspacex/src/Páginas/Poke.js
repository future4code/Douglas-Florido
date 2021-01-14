import React from 'react'
import axios from 'axios'


export class Poke extends React.Component {

    listarPoke = () =>{
     axios.get('')
    .then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
    }
    render(){
    return(
        <div>{this.listarPoke()}</div>
    )
    }
}


export default Poke;

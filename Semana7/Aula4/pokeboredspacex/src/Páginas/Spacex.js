import React from 'react'
import axios from 'axios'


export class Spacex extends React.Component {

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
        <div>spacex</div>
    )
    }
}


export default Spacex;

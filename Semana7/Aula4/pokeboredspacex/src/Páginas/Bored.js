import React from 'react'
import axios from 'axios'

export class Bored extends React.Component {

    listarBored = () =>{
        axios.get('http://www.boredapi.com/api/activity/')
       .then((res) => {
           console.log(res)
       }).catch((err) => {
           console.log(err)
       })
       }

    render(){
    return(
        <div>bored</div>
    )
    }
}


export default Bored;
import React from 'react'
import './Msg.css'


class Msg extends React.Component{

    

    render(){
        return(
            <div className="containerMsg" onDoubleClick={this.props.funcao}>
                <span className="mensagem" >{this.props.nome}</span>
                <span className="mensagem">{this.props.mensagem}</span>
                
            </div>
        )
    }

}

export default Msg
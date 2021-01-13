import React from "react";
import axios from "axios";

export class Listar extends React.Component {
    state = {
        usuarios: [],
    };

    getAllUsers = async () => {
        try {
            const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
                headers: {
                    Authorization: "douglas-florido-epps"
                }
            })
            console.log(response.data)
            this.setState({ usuarios: response.data })
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount = () => {
        this.getAllUsers();
    };

    render() {
        return (
            <div>
                 <h2>Lista de usuarios</h2>
                {this.state.usuarios.map((user) => {
                    return (
                        <div>
                            <p>{user.name}</p>
                            <button onClick={() => { this.deleteUser(user.id) }}>X</button>
                        </div>
                    )
                })}
            </div>

        )
    }
}
import { useContext, useState } from 'react'
import Context from '../../GlobalState/Context'
import { useHistory } from 'react-router-dom'
import { goToPage } from '../../Router/Walker'



const SignupPage = () => {
    const history = useHistory()
    const { states, setters, requests } = useContext(Context)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const onChangeLogin = (event) => setLogin(event.target.value)       
    const onChangePassword = (event) => setPassword(event.target.value)


    return (
        <div>
            <input placeholder="Login" value={login} onChange={onChangeLogin}></input>
            <input placeholder="Password" type="password" value={password} onChange={onChangePassword}></input>
            <button onClick={() => requests.signup(history, login, password)}>Create</button>
            <button onClick={() => goToPage(history, "/login")}>Back</button>
        </div>
    )
}

export default SignupPage
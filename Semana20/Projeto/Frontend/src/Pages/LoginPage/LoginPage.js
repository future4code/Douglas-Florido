import { useContext, useState } from 'react'
import Context from '../../GlobalState/Context'
import { useHistory } from 'react-router-dom'
import { goToPage } from '../../Router/Walker'


const LoginPage = () => {
    const { states, setters, requests } = useContext(Context)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
       
    const history = useHistory()

    const onChangeLogin = (event) => setLogin(event.target.value)       
    const onChangePassword = (event) => setPassword(event.target.value)
        
    

    return (
        <div>
            <input placeholder="Login" value={login} onChange={onChangeLogin}></input>
            <input placeholder="Password" type="password" value={password} onChange={onChangePassword}></input>
            <button onClick={() => requests.loginVerification(history, login, password)}> Enter </button>
            <div onClick={() => goToPage(history, "/signup")}>Create your account</div>
        </div>
    )
}

export default LoginPage
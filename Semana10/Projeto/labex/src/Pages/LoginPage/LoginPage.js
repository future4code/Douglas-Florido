import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { goToCreateAccount } from "../../Routes/Walker"
import useForm from '../../Components/LoginComponents/HandleLogin/HandleLogin.js'
import loginVerification from '../../Components/LoginComponents/LoginVerification/LoginVerification'
import {verifyLogin} from '../../Components/Requisitions/Requisitions'
// import Box from '@material-ui/core/Box'
import styled from 'styled-components'
// import image from '../../space-exploration-colorful-poster_225004-2188.jpg'
import Button from '@material-ui/core/Button';

const Box1 = styled.div `
display: flex;
/* background-color:gray; */
margin: auto;
height: 8vh;
width: 20vw;
/* border: 2px solid black; */

align-items: center;
justify-content:center;

`

const Box2 = styled.div`
display:flex;
align-items: center;
justify-content:center;
margin-top:2vh;
`
const Container = styled.div`
border: 10px outset #52504D;
background-color: gray;
border-Radius: 1vw;
padding: 2vw;
`

const BoxInputs = styled.p`
display:flex;
flex-direction: column;
`

const Minibox = styled.p`
display:flex;
align-content:space-between;
justify-content:space-between;
width:13vw;
`

const AllPage = styled.div `
display:flex;
flex-direction: column;
align-items: center;
justify-content:center;
/* background-color: gray; */
height: 100vh;
width: 100vw;
background-image: url("/images/spacecat.jpg");
background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
`

// const Button = styled.button`
// background: ${props=>props.bg || '#900C3F'};
// border-radius: ${props=>props.round};
// height: ${props=>props.height};
// width: ${props=>props.width};
// margin-left: ${props=>props.left || 0};
// border: 2px outset black;

// :hover{
//   background-color: white;
// }
// `




const LoginPage = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" })
  const history = useHistory()   

  return (
    <AllPage>
      
      <Container>
      <Box1>
        <BoxInputs>
        <Minibox>
        <label >Login:</label>
        <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Login"></input>
        </Minibox>
        <Minibox>
        <label >Password:</label>
        <input name="password" type="password" value={form.password} onChange={onChange} placeholder="Password"></input>
        </Minibox>
        </BoxInputs>
        <Button variant="contained" color="primary" onClick={() => verifyLogin(form, history)}>Enter</Button>
      </Box1>

      <Box2>
      <Button onClick={() => goToCreateAccount(history)}>Create Account</Button>
      </Box2>
      </Container>
      
    </AllPage>
  );
}

export default LoginPage;

import React, { useState } from 'react'
import Header from '../../Components/Header/Header.js'
import { createLogin } from '../../Components/Requisitions/Requisitions.js'
import axios from 'axios'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { goToLoginPage } from '../../Routes/Walker.js'
import useForm from '../../Components/LoginComponents/HandleLogin/HandleLogin'
import styled from 'styled-components'
// import Button from '@material-ui/core/Button';


const AllPage = styled.div`
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

const Minibox = styled.li`
display:flex;
align-content:space-between;
justify-content:space-between;
`

const ContainerBorder = styled.div`
display:flex;
align-items:center;
justify-content:center;
background-image: url("/images/155103-grunge-perigo-caution-background-grátis-vetor.jpg");
background-position: center; 
background-repeat: no-repeat; 
background-size: cover; 
/* background-color:pink; */
width:20vw;
height:10vh;
color:white;
border-radius:1vw;
border:2.5px outset;

padding:4vh 0.5vw;
`
const BottomButton = styled.button`
:hover{
  cursor:pointer;  
}
`

const Container = styled.div`
background-color:gray;
width:20vw;
height:8vh;
padding:2vw;
border-radius:1vw;
/* border: 5px outset #52504D; */
`

const ContainerBottomButton = styled.div`

display:flex;
flex-direction:row-reverse;
/* background-color:pink; */
width:20vw;

`
const CreateButton = styled.button`
display:flex;
width:100%;
height:4vh;
border:2.5px outset;
align-items:center;
justify-content:center;

:hover{
  cursor:pointer;  
}
margin-top:1vh;
/* background-color:pink; */
`



function CreateAccount() {
  // const [form, onChange, clear] = useForm({ email: "", password: "" });
  const [form, onChange, clearFields] = useForm({ email: "", password: "" })
  const history = useHistory()

  
  return (
    <AllPage>
      <ContainerBorder>
        <Container>
         
        <lu>          
          <Minibox><label>Login:</label>
            <input value={form.email} onChange={onChange} name="email" placeholder="Text"></input></Minibox>

          <Minibox><label>Password:</label>
            <input value={form.password} onChange={onChange} name="password" placeholder="Text"></input></Minibox>
          <CreateButton onClick={() => { createLogin(form) }}>Create</CreateButton>
        </lu>
        
        </Container>
      </ContainerBorder>
      <ContainerBottomButton>
      <BottomButton onClick={() => { goToLoginPage(history) }}>Back</BottomButton>
      </ContainerBottomButton>
    </AllPage>
  );
}

export default CreateAccount;

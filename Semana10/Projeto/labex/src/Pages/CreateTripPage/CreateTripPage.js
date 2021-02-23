import axios from 'axios'
import React from 'react'
import Header from '../../Components/Header/Header.js'
import useForm from '../../Components/LoginComponents/HandleLogin/HandleLogin.js'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const AllPage = styled.div`
background-image:url("./images/Untitled-3.jpg");
height:95vh;
width:100vw;
background-position: center; 
background-repeat: no-repeat; 
background-size: cover; 
display:flex;
align-items:center;
justify-content:center;
`

const Container = styled.div`
display:flex;
align-items:left;
justify-content:space-evenly;
width:10vw;
height:50vh;
background-color:gray;
flex-direction:column;
border-Radius: 1vw;
padding: 2vw;
color:white;
`

const MiniBox = styled.div`
display:flex;
flex-direction:column;
`

const BigLabel = styled.label`
font-size:30px;
margin-bottom:20px;
`


function CreateTripPage() {
  const [form, onChange, clearFields] = useForm({ name: "", planet: "", date: "", description: "", duration: "" })

  const sendForm = () => {

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.duration
    }
    // console.log(body)
    const authentication = localStorage.getItem("token")
    // console.log(authentication)
    const headers = {
      headers: {
        auth: authentication
      }
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglas-florido/trips', body, headers)
      .then((res) => {
        console.log(res)
        alert("Enviado com sucesso")

      })
      .catch((err) => { console.log(err) })

  }

  return (
    <>

      <Header />
      <AllPage>
        <Container>
          <BigLabel>Create Trip</BigLabel>
        <MiniBox>
        <label>Name your Trip!</label>
        <input onChange={onChange} value={form.name} name="name" type="text" placeholder="Name"></input>
        </MiniBox>
        <MiniBox>
        <label>Which planet do you wanna Travel to?</label>
        <input onChange={onChange} value={form.planet} name="planet" type="text" placeholder="Planet"></input>
        </MiniBox>
        <MiniBox>
        <label>Date of travel</label>
        <input onChange={onChange} value={form.date} name="date" type="date" placeholder="Date"></input>
        </MiniBox>
        <MiniBox>
        <label>Describe in a few words your amazing trip!</label>
        <input onChange={onChange} value={form.description} name="description" type="text" placeholder="Description"></input>
        </MiniBox>
        <MiniBox>
        <label>How many days are you staying there?</label>
        <input onChange={onChange} value={form.duration} name="duration" type="number" placeholder="Duration"></input>
        </MiniBox>
        <Button variant="contained" color="primary" onClick={sendForm}>Create Trip!</Button>
        </Container>

      </AllPage>
    </>
  );
}

export default CreateTripPage;

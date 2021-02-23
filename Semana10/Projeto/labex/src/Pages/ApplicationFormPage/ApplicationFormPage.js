import React, {useEffect, useState} from 'react'
import Header from '../../Components/Header/Header.js'
import useForm from '../../Components/LoginComponents/HandleLogin/HandleLogin'
import axios from 'axios'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const AllPage = styled.div`
background-image:url("./images/Untitled-1.jpg");
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

function ApplicationFormPage() {
  const [form, onChange, clearFields] = useForm({ name: "", age: 0, applicationText: "", profession: "", country: ""})
  const [trips, setTrips] = useState([])
  const [tripId, setTripId] = useState("")

  const allTrips = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglas-florido/trips')
      .then((res) => {
        // console.log(res)
        // console.log(res.data.trips)
        console.log(res.data.trips)
        setTrips(res.data.trips)
      })
      .catch((err) => { console.log(err) })
  }

  useEffect(()=>{
    allTrips()
  },[])

  let setTripNameFunction = (event) => {
    console.log(event.target.value)
    setTripId(event.target.value)
  }

  const sendForm = (tripName) => {
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country
    }

    const id = localStorage.getItem("id")


    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglas-florido/trips/${tripId}/apply`, body)
      .then((res) => { console.log(res) })
      .catch((err) => { console.log(err) })
  }

  return (
       <>
      <Header />
      <AllPage>   
      <Container>
        <BigLabel>Apply Now!</BigLabel>
      <MiniBox>
        <label>Tell us your name</label>
      <input value={form.name} onChange={onChange} name="name" type="text" placeholder="Name"></input>
      </MiniBox>
      <MiniBox>
      <label>Age</label>
      <input value={form.age} onChange={onChange} name="age" type="number" placeholder="age"></input>
      </MiniBox>
      <MiniBox>
      <label>Tell why you want to participate on this trip</label>
      <input value={form.applicationText} onChange={onChange} name="applicationText" type="text" placeholder="Application Text"></input>
      </MiniBox>
      <MiniBox>
      <label>What are you, current, working with?</label>
      <input value={form.profession} onChange={onChange} name="profession" type="text" placeholder="Profession"></input>
      </MiniBox>
      <MiniBox>
      <label>Country of Birth</label>
      <input value={form.country} onChange={onChange} name="country" type="text" placeholder="Country"></input>
      </MiniBox>
      <MiniBox>
      <label>Choose a trip!</label>
      <select onChange={setTripNameFunction}> 
        <option></option>        
        {trips.map((trip)=>{
          return(
          <option  key={trip.id} value={trip.id}>{trip.name}</option>
          )
        })}
      </select>
      </MiniBox>
      <Button variant="contained" color="primary" onClick={sendForm}>Send</Button>      
      
    </Container>
    </AllPage>
    </>
    
  );
}

export default ApplicationFormPage;

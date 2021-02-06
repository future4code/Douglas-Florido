import axios from 'axios'
import React from 'react'
import Header from '../../Components/Header/Header.js'
import useForm from '../../Components/LoginComponents/HandleLogin/HandleLogin.js'


function CreateTripPage() {
  const [form, onChange, clearFields] = useForm({ name: "", planet: "", date: "", description: "", duration: "" })

  const sendForm = () => {

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      duration: form.duration
    }
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
    <div>
      <Header />
      <form onSubmit={sendForm()}>
        <input onChange={onChange} value={form.name} name="name" type="text" placeholder="Name"></input>
        <input onChange={onChange} value={form.planet} name="planet" type="text" placeholder="Planet"></input>
        <input onChange={onChange} value={form.date} name="date" type="date" placeholder="Date"></input>
        <input onChange={onChange} value={form.description} name="description" type="text" placeholder="Description"></input>
        <input onChange={onChange} value={form.duration} name="duration" type="number" placeholder="Duration"></input>
        <button>enviar</button>
      </form>

    </div>
  );
}

export default CreateTripPage;

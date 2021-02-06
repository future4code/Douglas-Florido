import axios from 'axios'
import { goToMainPage } from '../../Routes/Walker.js'

export const createLogin = (information) => {

    console.log(information)
    const emaildado = information.email
    const passworddado = information.password
    console.log(emaildado, passworddado)

    const body = {
        email: emaildado,
        password: passworddado
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglas-florido/signup', body)
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) })
}


export let verifyLogin = async (information, history) => {


    // console.log(information.email)
    const email = information.email
    const password = information.password


    const body = {
        email: email,
        password: password
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglas-florido/login', body)

        .then((res) => { 
            localStorage.setItem("token", res.data.token)
            // console.log(res.data.token)
            localStorage.setItem("id", res.data.user.id)
            // console.log(res.data.user.id)
            goToMainPage(history) 
        })
        .catch((err) => { alert("Incorrect e-mail or password") })
}



export const retrieveTripData = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglas-florido/trips')


    .then((res) => {
        console.log(res)
        console.log(res.data.trips)


        {
            res.data.trips.map((trip) => {
                return (
                    <p>Nome: {trip.name}</p>
                )
            })
        }



    })
    .catch((err) => { console.log(err) })
}




export const populateTrips = async () => {
    try {
        const res = await axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglas-florido/populate')
        console.log(res)

    }
    catch (err) { console.log(err) }
}


// export const approvation = (candidateId, tripId, authentication) => {
//     const body = {
//         auth: authentication 
//     }
//     axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${candidateId}/trips/${tripId}/candidates/:candidateId/decide`, body)
//         .then((res) => { console.log(res) })
//         .catch((err) => { console.log(err) })
// }
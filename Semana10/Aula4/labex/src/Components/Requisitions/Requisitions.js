import axios from 'axios'



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


export let verifyLogin = (information, setLoginInfo) => {
    console.log(information.email)
    const email = information.email
    const password = information.password


    const body = {
        email: email,
        password: password
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglas-florido/login', body)
        .then((res) => { setLoginInfo(res) })
        .catch((err) => { console.log(err) })

}

export const retrieveTripData = (information) => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglas-florido/trips')
        .then((res) => { information(res) })
        .catch((err) => { console.log(err) })
}

export const populateTrips = () => {
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglas-florido/populate')
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) })

}


// export const approvation = (candidateId, tripId, authentication) => {
//     const body = {
//         auth: authentication 
//     }
//     axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${candidateId}/trips/${tripId}/candidates/:candidateId/decide`, body)
//         .then((res) => { console.log(res) })
//         .catch((err) => { console.log(err) })
// }
import axios from 'axios'

export const createLogin = (information) => {
    // console.log(information)
    const email = information.login
    const password = information.password
    // console.log(email, password)

    const body = {
        email: email,
        password: password
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglas-florido/signup', body)
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) })
}


export const verifyLogin = (information) => {
    const email = information.login
    const password = information.password        
}

// export const approvation = (candidateId, tripId, authentication) => {
//     const body = {
//         auth: authentication 
//     }
//     axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${candidateId}/trips/${tripId}/candidates/:candidateId/decide`, body)
//         .then((res) => { console.log(res) })
//         .catch((err) => { console.log(err) })
// }
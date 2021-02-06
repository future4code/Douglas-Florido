import axios from 'axios'


export const createLogin = async (information) => {
    try {
        console.log(information)
        const emaildado = information.email
        const passworddado = information.password
        console.log(emaildado, passworddado)

        const body = {
            email: emaildado,
            password: passworddado
        }

        const res = await axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglas-florido/signup', body)
        console.log(res)

    }

    catch (err) { console.log(err) }
}


export let verifyLogin = async (information, setLoginInfo) => {
    try {
        console.log(information.email)
        const email = information.email
        const password = information.password


        const body = {
            email: email,
            password: password
        }

        const res = await axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglas-florido/login', body)
        setLoginInfo(res)
    }
    catch (err) { console.log(err) }
}



export const retrieveTripData = async (information) => {
    try {

        const res = await axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglas-florido/trips')
        information(res)

    } catch (err) { console.log(err) }
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
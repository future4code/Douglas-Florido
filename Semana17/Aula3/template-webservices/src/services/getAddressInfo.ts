import axios from 'axios'
import { address } from '../types'

const getAddressInfo = async (CEP: string, numero: number, complemento: string): Promise<address | null> => {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${CEP}/json/`)
        
        console.log("variavel response.data: ", response.data)

        const retorno: address = {
            CEP: response.data.cep,
            numero: numero,
            complemento: complemento,
            logradouro: response.data.logradouro,
            bairro: response.data.bairro,
            cidade: response.data.localidade,
            estado: response.data.uf
        }
        
        console.log("variavel Retorno: ", retorno)

        return retorno

    } catch (error) {
        return null
    }


}

export default getAddressInfo
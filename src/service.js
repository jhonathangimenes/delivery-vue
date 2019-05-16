import axios from 'axios'

const apiCliente = axios.create({
    baseURL: 'http://chefaodelivery.com.br/api',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEstabelecimentos() {
        return apiCliente.get('/estabelecimento')
    }
}
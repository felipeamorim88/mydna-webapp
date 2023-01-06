import axios from 'axios';
const urlBase = process.env.REACT_APP_BACKEND_BASE_URL

export default class ProfessionalService {

    getProfessionalList = async () => {        
        try {
            const response = await axios.get(`${urlBase}/professional/`)
            return response.data
        } catch (error) {
            return error
        }
    }

    getProfessional = async (id: string) => {        
        try {

            const response = await axios.get(`${urlBase}/professional/${id}`)
            return response.data
        } catch (error) {
            return error
        }
    }

    postProfessional = async (professional: any) => {        
        try {
            console.log(professional)
            const response = await axios.post(`${urlBase}/professional/`,professional)
            console.log(response)

            return response.data
        } catch (error) {
            console.log(error)
            return error
        }
    }

    updateProfessional = async (id:string,professional: any) => {        
        try {

            const response = await axios.patch(`${urlBase}/professional/${id}`,professional)
            return response.data
        } catch (error) {
            return error
        }
    }

    deleteProfessional = async (id: string) => {        
        try {

            const response = await axios.delete(`${urlBase}/professional/${id}`)
            return response.data
        } catch (error) {
            return error
        }
    }

}
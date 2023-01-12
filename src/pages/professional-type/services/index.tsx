import axios from 'axios';
const urlBase = process.env.REACT_APP_BACKEND_BASE_URL

export default class ProfessionalTypeService {

    getProfessionalTypeList = async () => {        
        try {
            const response = await axios.get(`${urlBase}/professional-type/`)
            return response.data
        } catch (error) {
            return error
        }
    }

    getProfessionalType = async (id: string) => {        
        try {

            const response = await axios.get(`${urlBase}/professional-type/${id}`)
            return response.data
        } catch (error) {
            return error
        }
    }

    postProfessionalType = async (professional: any) => {        
        try {
            const response = await axios.post(`${urlBase}/professional-type/`,professional)
            return response.data
        } catch (error) {
            return error
        }
    }

    updateProfessionalType = async (id:string,professional: any) => {        
        try {

            const response = await axios.patch(`${urlBase}/professional-type/${id}`,professional)
            return response.data
        } catch (error) {
            return error
        }
    }

    deleteProfessional = async (id: string) => {        
        try {

            const response = await axios.delete(`${urlBase}/professional-type/${id}`)
            return response.data
        } catch (error) {
            return error
        }
    }

}
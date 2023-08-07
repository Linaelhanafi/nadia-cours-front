import axios from "axios"

export const getCourses = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}/Course/getCourses`)
        console.log(response)
        return await response.data
    } catch (e) {
        console.log(e)
        return null
    }
}
export const sendEmail = async ({ prenom, nom, filiere, email, numtel, message }) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}/sendEmail`, { prenom, nom, filiere, email, numtel, message })
        return await response.data
    } catch (e) {
        console.log(e)
        return null
    }
}


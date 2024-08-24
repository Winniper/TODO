import axios from "axios"

const apiKey = import.meta.env.VITE_API_KEY

export const signUp = async (email : string, password : string) => {

    try {
        const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,{
            "email":email,
            "password":password,
        })    

        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
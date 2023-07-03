import axios from 'axios'


const API_URL = 'api/user/'


const registerUser = async (userData) => {
    const response = await axios.post(API_URL + '/register' , userData)
    localStorage.setItem('user' , JSON.stringify(response.data))
    return response.data
}


const loginUser = (userData) => {
    console.log(userData)
}


const authService = {
    registerUser,
    loginUser
}

export default authService
import axios from "axios"

export const handleLogin = async ({ email, password }, setAuthState, navigate) => {
    try {
        console.log({ email, password }, setAuthState, navigate)
        const response = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}/User/login`, { email, password });
        console.log(response.data.token)
        localStorage.setItem('token', response.data.token);
        setAuthState(prevState => ({
            ...prevState,
            isAuthenticated: true,
            token: response.data.token
        }));
        navigate('/')
    } catch (error) {
        console.log(error)
    }
};

export const handleLogout = (navigate) => {
    try {
        localStorage.removeItem('token')
        setAuthState({
            isAuthenticated: false,
            token: null,
            user: null
        })
    } catch (error) {
        console.log(error)
    }
};
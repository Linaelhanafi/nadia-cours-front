import { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    const { setAuthState, authState } = useContext(AuthContext)
    const handleLogout = () => {
        try {
            localStorage.removeItem('token')
            setAuthState({
                isAuthenticated: false,
                token: null,
                user: null,
                role: null
            })
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        handleLogout();
        navigate('/login');
    }, [navigate]);

    return null;
}

export default Logout
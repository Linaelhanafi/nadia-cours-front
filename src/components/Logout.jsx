import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../helpers/auth';

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        handleLogout();
        navigate('/login');
    }, [navigate]);

    return null;
}

export default Logout
import { useContext } from 'react'
import { AuthContext } from "/src/context/AuthContext.jsx";
import { Navigate } from 'react-router-dom';

export function PrivateRoute({ element }) {
    const { authState } = useContext(AuthContext);

    if (!authState.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return element;
}
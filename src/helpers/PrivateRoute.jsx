import { useContext } from 'react'
import { Navigate, Route } from 'react-router-dom';
import { AuthContext } from "/src/context/AuthContext.jsx";
function PrivateRoute({ element, requiredRole }) {
    const { authState } = useContext(AuthContext)

    if (!authState.isAuthenticated && !localStorage.getItem("token")) {
        return <Navigate to="/login" />;
    }

    if (requiredRole && authState.role !== requiredRole && !localStorage.getItem("token")) {
        return <Navigate to="/" />;
    }

    return element
}

export default PrivateRoute;
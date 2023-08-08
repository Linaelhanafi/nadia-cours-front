import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoute() {
    const { authState } = useContext(AuthContext);

    if (!authState.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <h1>Protected Route</h1>
            <Outlet />
        </div>
    );
}

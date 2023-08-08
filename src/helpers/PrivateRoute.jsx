import { Route, Navigate } from 'react-router-dom';

export function PrivateRoute({ path, ...props }) {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Route path={path} {...props} />;
}
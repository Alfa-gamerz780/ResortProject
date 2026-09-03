import { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
    const { isAuthenticated, loading } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        localStorage.setItem("isAuthenticated", isAuthenticated);
    }, [isAuthenticated]);

    if (loading) {
        return <div>Checking Authentication..</div>;
    }

    if (!isAuthenticated) {
        return (
            <Navigate
                to={'/'}
                replace
            />
        );
    }

    return <Outlet />
}

export default ProtectedRoute;

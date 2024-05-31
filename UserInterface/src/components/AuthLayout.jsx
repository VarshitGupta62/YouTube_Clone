import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AuthLayout({ children }) {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (authStatus === true) {
            navigate("/");
        }
        else  if (authStatus === false) {
            navigate("/login");
        }
    }, [authStatus, navigate]);

    // Return children directly when the user is authenticated or show a login
    return (
        <>
            {children}
        </>
    );
}

export default AuthLayout;
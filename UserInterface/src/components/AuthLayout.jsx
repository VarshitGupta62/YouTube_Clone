// AuthLayout.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AuthLayout({ children }) {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (authStatus === false) {
            navigate("/");
        }
    }, [authStatus, navigate]);

    return (
        <>
            {authStatus === true ? children : null}
        </>
    );
}

export default AuthLayout;
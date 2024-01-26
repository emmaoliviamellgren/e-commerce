import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import RootLayout from '../../RootLayout';

// Components
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const AuthLayout = () => {
    // const { token } = useAuth();
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (token) {
    //         navigate('/private');
    //     }
    // }, [token]);

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default AuthLayout;

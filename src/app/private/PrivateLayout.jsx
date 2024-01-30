import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useAuth, AuthContext } from '../../contexts/AuthContext';

// Components
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import OrderHistoryPage from './OrderHistoryPage';

const PrivateLayout = () => {
    const navigate = useNavigate();
    const { token } = useAuth(AuthContext);

    // useEffect(() => {
    //     if (token) {
    //         navigate('/private');
    //     } else {
    //         navigate('/auth/login');
    //     }
    // }, [token, navigate]);

    return (
        <>
            <Navbar />
            <h1 className='text-2xl text-center font-bold p-12'>Dashboard</h1>
            <OrderHistoryPage />
            <Outlet />
            <Footer />
        </>
    );
};

export default PrivateLayout;

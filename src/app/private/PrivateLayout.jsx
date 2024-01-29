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

    useEffect(() => {
        if (token) {
            navigate('/private');
        } else {
            navigate('/auth/login');
        }
    }, [token, navigate]);

    return (
        <>
            <Navbar />
            <p className='text-3xl text-center font-bold'>PRIVATE</p>
            <OrderHistoryPage />
            <Outlet />
            <Footer />
        </>
    );
};

export default PrivateLayout;

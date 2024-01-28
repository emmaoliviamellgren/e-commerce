import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

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
            <div className='text-black font-bold text-2xl'>Dashboard</div>
            <Outlet />
            <Footer />
        </>
    );
};

export default AuthLayout;

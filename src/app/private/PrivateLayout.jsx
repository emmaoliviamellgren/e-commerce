
// Components
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import OrderHistoryPage from './OrderHistoryPage';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect } from 'react';

const PrivateLayout = () => {

    const { token } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate("/auth/login");
        }
    }, [token, navigate]);

    return (
        <>
            <Navbar />
            <OrderHistoryPage />
            <Footer />
        </>
    );
};

export default PrivateLayout;

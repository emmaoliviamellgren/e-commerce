import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const AuthLayout = () => {

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default AuthLayout;

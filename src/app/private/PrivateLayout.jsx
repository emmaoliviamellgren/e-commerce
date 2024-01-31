
// Components
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import OrderHistoryPage from './OrderHistoryPage';

const PrivateLayout = () => {

    return (
        <>
            <Navbar />
            <OrderHistoryPage />
            <Footer />
        </>
    );
};

export default PrivateLayout;

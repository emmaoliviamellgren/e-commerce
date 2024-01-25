import { Outlet } from 'react-router-dom';

const PrivateLayout = () => {
    return (
        <>
            <div>PRIVATE</div>;
            <Outlet />
        </>
    );
};

export default PrivateLayout;

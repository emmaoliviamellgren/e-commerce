import React from 'react';
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
    return (
        <div className='mx-auto my-20 w-[28rem] lg:w-[60rem] px-16 xl:px-56 py-20 border border-slate-300 shadow-md shadow-slate-400 bg-white rounded-lg'>
            <h1 className='text-xl text-center'>Log in to your account</h1>
            <LoginForm />
        </div>
    );
};

export default LoginPage;

import { useContext, createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const navigate = useNavigate()

    // Register new account
    const register = (formData) => {
        return fetch('https://js2-ecommerce-api.vercel.app/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.status !== 201) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then((data) => {
                setToken(data.token);
                localStorage.setItem('accessToken', data.token);
                console.log('localStorage set with token value: ' + data.token)
            })
            .catch((error) => {
                console.log(
                    'There was a problem with creating your account.',
                    error
                );
            });
    };

    // Log in to existing account
    const login = (formData) => {
        return fetch('https://js2-ecommerce-api.vercel.app/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then((data) => {
                setToken(data.token);
                localStorage.getItem('accessToken', data.token);
                console.log('localStorage set with token value: ' + data.token)
            })
            .catch((error) => {
                console.log(
                    'There was a problem when logging in to your account.',
                    error
                );
            });
    };

    // Log out
    const logout = () => {
        localStorage.removeItem('accessToken');
        navigate('/')
    };

    return (
        <AuthContext.Provider value={{ token, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

export const useAuth = () => {

    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used inside an AuthContextProvider')
    return context

}
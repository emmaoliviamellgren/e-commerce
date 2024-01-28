import { FaExclamationCircle } from 'react-icons/fa';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useState } from 'react';

// Contexts
import { useAuth, AuthContext } from '../contexts/AuthContext'

const LoginForm = () => {

    const navigate = useNavigate();
    const { login, token } = useAuth(AuthContext);

    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const form = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(2, 'Must be at least 2 characters long')
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
        }),
        onSubmit: (values) => {
            login(values)
                .then(() => {
                    form.resetForm();
                    console.log('Log in successful!');
                    navigate('/private');
                })
                .catch(error => {
                    console.log('Couldn\'t log user in. ', error);
                });
        }})

    return (
        <div>
            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                <form
                    onSubmit={form.handleSubmit}
                    className='flex justify-center flex-col wrap w-full gap-2'>
                    <label
                        htmlFor='email'
                        className='text-sm'>
                        Email address
                    </label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.email}
                        className={`rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-700 text-sm focus:outline-none ${
                            form.errors.email &&
                            form.touched.email &&
                            'ring-orange-700'
                        }`}
                    />
                    {form.errors.email && form.touched.email && (
                        <div className='flex gap-1.5 items-center text-xs text-red-700 tracking-wide'>
                            <FaExclamationCircle />
                            <p>{form.errors.email}</p>
                        </div>
                    )}

                    <label
                        htmlFor='password'
                        className='text-sm mt-4'>
                        Password
                    </label>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.password}
                        className={`rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-700 text-sm focus:outline-none ${
                            form.errors.password &&
                            form.touched.password &&
                            'ring-orange-700'
                        }`}
                    />
                    {form.errors.password && form.touched.password && (
                        <div className='flex gap-1.5 items-center text-xs text-red-700 tracking-wide'>
                            <FaExclamationCircle />
                            <p>{form.errors.password}</p>
                        </div>
                    )}

                    <div>
                        <button
                            type='submit'
                            className='flex w-full justify-center rounded-md bg-orange-700 mt-4 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 tracking-wide'>
                            Sign in
                        </button>
                    </div>
                </form>

                <p className='mt-6 text-center text-sm text-gray-500'>
                    Not a member?{' '}
                    <Link
                        to='/auth/register'
                        className='font-semibold leading-6 text-orange-600 hover:underline'>
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;

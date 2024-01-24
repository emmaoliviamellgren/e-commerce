import { MdError } from 'react-icons/md';
import { FaCircleCheck } from 'react-icons/fa6';
import { FaExclamationCircle } from 'react-icons/fa';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

const Form = () => {
    // Error message
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    // Fetch API for posting message
    const postData = (values) => {
        fetch('https://js2-ecommerce-api.vercel.app/api/messages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((response) => {
                if (!response.ok) {
                    setError('Something went wrong');
                    console.log(
                        'Something went wrong when sending message. Status code: ' +
                            response.status
                    );
                }
                return response.json();
            })
            .then((data) => {
                setSuccess(data.message);
            });
    };

    // Creating form with Formik
    const form = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Must be at least 2 characters long')
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            message: Yup.string().required('You must enter a message'),
        }),
        onSubmit: (values) => {
            postData(values);
            form.resetForm();
        },
    });

    return (
        <div className='mx-auto my-20 w-[28rem] lg:w-[60rem] px-16 xl:px-56 py-20 border border-slate-300 shadow-md shadow-slate-400 bg-white rounded-lg'>
            <form
                onSubmit={form.handleSubmit}
                className='flex justify-center flex-col wrap w-full gap-2'>
                <label
                    htmlFor='name'
                    className='text-sm font-medium'>
                    Name
                </label>
                <input
                    id='name'
                    name='name'
                    type='text'
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.name}
                    className={`rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-700 text-sm focus:outline-none ${
                        form.errors.name &&
                        form.touched.name &&
                        'ring-orange-700'
                    }`}
                />
                {form.errors.name && form.touched.name && (
                    <div className='flex gap-1.5 items-center text-xs text-red-700 tracking-wide'>
                        <FaExclamationCircle />
                        <p>{form.errors.name}</p>
                    </div>
                )}
                <label
                    htmlFor='email'
                    className='text-sm font-medium leading-6 text-gray-900 mt-6'>
                    Email Address
                </label>
                <input
                    id='email'
                    name='email'
                    type='email'
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
                    htmlFor='message'
                    className='text-sm font-medium mt-6'>
                    Your Message
                </label>
                <textarea
                    id='message'
                    name='message'
                    type='text'
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.message}
                    rows={4}
                    className={`rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-700 text-sm focus:outline-none ${
                        form.errors.message &&
                        form.touched.message &&
                        'ring-orange-700'
                    }`}
                />
                {form.errors.message && form.touched.message && (
                    <div className='flex gap-1.5 items-center text-xs text-red-700 tracking-wide'>
                        <FaExclamationCircle />
                        <p>{form.errors.message}</p>
                    </div>
                )}
                <div className='border border-slate-300 mt-6'></div>
                <button
                    type='submit'
                    className='w-24 mt-4 mx-auto text-sm bg-orange-700 text-white transition hover:opacity-75 px-4 py-2 rounded-md shadow-md shadow-orange-400 tracking-wide'>
                    Submit
                </button>
                {error && (
                    <div className='flex items-center justify-evenly text-sm border border-red-200 w-72 mx-auto mt-6 py-2 bg-red-100'>
                        <MdError />
                        <p>{error}</p>
                    </div>
                )}
                {success && (
                    <div className='flex items-center justify-evenly text-sm border border-green-200 w-72 mx-auto mt-6 py-2 bg-green-100'>
                        <FaCircleCheck />
                        <p>{success}</p>
                    </div>
                )}
            </form>
        </div>
    );
};
export default Form;

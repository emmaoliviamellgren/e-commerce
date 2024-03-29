import { MdError } from 'react-icons/md';
import { FaCircleCheck } from 'react-icons/fa6';
import { FaExclamationCircle } from 'react-icons/fa';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

const ContactForm = () => {

    // Error message
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    // Posting message
    const postData = (values) => {
        fetch('/api/messages', {
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
                setSuccess('Message sent successfully!');
            });
    };

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
            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                <form
                    onSubmit={form.handleSubmit}
                    className='flex justify-center flex-col wrap w-full gap-2'>
                    <label
                        htmlFor='name'
                        className='text-sm'>
                        Name
                    </label>
                    <input
                        id='name'
                        name='name'
                        type='text'
                        autoComplete='name'
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
                        className='text-sm mt-6'>
                        Email Address
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
                        htmlFor='message'
                        className='text-sm mt-6'>
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

                    <button
                        type='submit'
                        className='flex w-full justify-center rounded-md bg-orange-700 mt-4 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 tracking-wide'>
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
        </div>
    );
};
export default ContactForm;

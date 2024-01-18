import { useFormik } from 'formik';

const Form = () => {
    const form = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
    });

    return (
        <div className='mx-auto my-20 w-[28rem] lg:w-[60rem] px-16 xl:px-56 py-20 border border-slate-300 shadow-md shadow-slate-400 bg-white rounded-lg mx'>

            <form onSubmit={form.handleSubmit} className='w- flex justify-center flex-col wrap w-full gap-2'>

                <label htmlFor='firstName' className='text-sm font-medium'>First Name</label>
                <input id='firstName' name='firstName' type='text' onChange={form.handleChange} value={form.values.firstName} className='rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-700 text-sm mb-6 focus:outline-none'/>

                <label htmlFor='lastName' className='text-sm font-medium'>Last Name</label>
                <input id='lastName' name='lastName' type='text' onChange={form.handleChange} value={form.values.lastName} className='rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-700 text-sm mb-6 focus:outline-none'/>

                <label htmlFor='email' className='text-sm font-medium leading-6 text-gray-900'>Email Address</label>
                <input id='email' name='email' type='email' onChange={form.handleChange} value={form.values.email} className='rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-700 text-sm mb-6 focus:outline-none'/>
                <div className='border border-slate-300'></div>
                <button type='submit' className='w-24 mt-4 mx-auto text-sm bg-orange-700 text-white transition hover:opacity-75 px-4 py-2 rounded-md shadow-md shadow-orange-400 tracking-wide'>Submit</button>
            </form>
        </div>
    );
};
export default Form;

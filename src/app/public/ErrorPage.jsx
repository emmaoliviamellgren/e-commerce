import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);

    return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-8">
        <h1 className="text-4xl font-semibold text-slate-600">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="bg-slate-600 py-2 px-4 text-white">{error.statusText || error.message}</p>
    </div>
    );
}

export default ErrorPage
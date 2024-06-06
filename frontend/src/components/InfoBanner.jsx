import { XMarkIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';


export const InfoBanner = () => {

    const [isOpen, setIsOpen] = useState(false);

    if (!isOpen) return null;

    return (
        <div className='relative isolate flex items-center gap-x-6 overflow-hidden bg-orange-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1'>
            <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
                <p className='text-xs font-medium leading-6 text-white'>
                    Vid första rendering av sidan kan servern ta upp till 30 sek
                    att svara på grund av begränsningar hos Render. Jag jobbar
                    på att förbättra prestandan.
                </p>
            </div>
            <div className='flex flex-1 justify-end'>
                <button
                    type='button'
                    className='-m-3 p-3 focus-visible:outline-offset-[-4px]'
                    onClick={() => setIsOpen(false)}>
                    <span className='sr-only'>Dismiss</span>
                    <XMarkIcon
                        className='h-5 w-5 text-white'
                        aria-hidden='true'
                    />
                </button>
            </div>
        </div>
    );
};

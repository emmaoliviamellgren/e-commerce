import { ProductsContext } from '../contexts/ProductsContext';
import { CategoryContext } from '../contexts/CategoryContext';
import { useContext, Fragment } from 'react';
import { Transition, Popover } from '@headlessui/react';
import { GoChevronDown } from 'react-icons/go';

const FilterByCategory = () => {
    const { products } = useContext(ProductsContext);
    const {
        addCategory,
        removeCategory,
        resetCategories,
        selectedCategories,
        categories,
    } = useContext(CategoryContext);

    return (
        <div className='flex justify-center gap-x-6 items-center w-screen bg-white border border-slate-300 h-14 text-sm'>
            <span className='font-semibold tracking-wide'>
                ...Or browse by category:
            </span>

            <Popover className='relative'>
                {() => (
                    <>
                        <Popover.Button className='inline-flex items-center gap-x-1 rounded-md bg-gradient-to-r text-white from-indigo-500 to-orange-700 px-4 py-2 text-sm font-medium hover:bg-black/20 focus:outline-none'>
                            Categories
                            <GoChevronDown
                                className='h-5 w-5'
                                aria-hidden='true'
                            />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter='transition ease-out duration-200'
                            enterFrom='opacity-0 translate-y-1'
                            enterTo='opacity-100 translate-y-0'
                            leave='transition ease-in duration-150'
                            leaveFrom='opacity-100 translate-y-0'
                            leaveTo='opacity-0 translate-y-1'>
                            <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-gray-900/5'>
                                <div className='p-4'>
                                    {categories &&
                                        categories.map((category) => (
                                            <button
                                                onClick={() => {
                                                    if (
                                                        selectedCategories.includes(
                                                            category
                                                        )
                                                    ) {
                                                        removeCategory(
                                                            category
                                                        );
                                                    } else {
                                                        addCategory(category);
                                                    }
                                                }}
                                                className={`m-2 px-5 py-2 inline-flex justify-center items-center text-sm border rounded-full border-slate-300 transition-all duration-300 ${
                                                    selectedCategories.includes(
                                                        category
                                                    )
                                                        ? 'bg-orange-700 text-white'
                                                        : 'bg-white text-gray-900'
                                                } `}>
                                                {category}
                                            </button>
                                        ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    );
};

export default FilterByCategory;

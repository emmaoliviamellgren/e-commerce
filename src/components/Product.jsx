const Product = ({product}) => {

    return (
        <>
            <div className='bg-white h-[550px] w-full'>
            <div className='w-2/3'>
                <h3 className='text-sm text-gray-700 hover:text-gray-900'>{product.name}</h3></div>
                {console.log(product.name)}
        </div>        
        </>
    );
};
export default Product;

// Components
import Hero from '../../components/Hero';
import ProductGrid from '../../components/ProductGrid';
import FilterByCategory from '../../features/FilterByCategory';

function HomePage() {
    return (
        <>
            <Hero />
            <div className='text-center my-12'>
                <h1 className='text-3xl mb-2'>Shop our products</h1>
                <p>Browse the collection...</p>
            </div>
            <FilterByCategory />
            <ProductGrid />
        </>
    );
}
export default HomePage;

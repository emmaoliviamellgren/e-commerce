// TODO:
// 1. När en användare har loggat in eller registrerat ett konto så kommer API:et skicka en Användar-objekt tillbaka med uppgifter om användaren samt en Token som är unik för just den inloggningen och är kopplad till användaren. Detta behöver du spara för att kunna använda vid senare tillfällen.
// 2. (EV) Fixa plus-symboler vid produkterna (i ProductCard)
// 3. (EV) Skapa Skeleton när produkterna/API laddas
// 4. (EV) fixa så att alert körs varje gång 'Add To Cart' klickas på
// 5. (EV) expandera checkout-popovern (i Navbar)

// Components
import Hero from '../../components/Hero';

import ProductGrid from '../../components/ProductGrid';
import FilterByCategory from '../../components/FilterByCategory';

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

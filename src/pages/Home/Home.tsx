import { Brand, Collection, Discount, Gift, Hero, NewCollectionBrands, ShopNow } from "./components"

const Home = () => {
  return (
    <>
      <header className='container'>
        <Hero />
      </header>
      <main>
        <Brand />
        <Collection />
        <Gift />
        <NewCollectionBrands />
        < Discount />
        < ShopNow />
      </main>
    </>
  )
}

export default Home
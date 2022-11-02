import { Brand, Collection, Discount, Gift, Hero, NewCollectionBrands, ShopNow } from "./components"

const Home = () => {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main className='main__container'>
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
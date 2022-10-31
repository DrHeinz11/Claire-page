import { Brand, Collection, Discount, Gift, Hero, NewCollectionBrands, ShopNow } from "./components"

const Home = () => {
  return (
    <>
      <header className='container'>
        <Hero />
      </header>
      <hr />
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
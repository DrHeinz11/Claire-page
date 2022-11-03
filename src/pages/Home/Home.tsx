import { FC } from 'react'
import { Brand, Collection, Discount, Gift, Hero, NewCollectionBrands, ShopNow } from "./components"
import Fashion from './components/Fashion/Fashion'

const Home: FC = () => {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main className='main__container'>
        <Brand />
        <Collection />
        <Gift />
        <Fashion />
        <NewCollectionBrands />
        < Discount />
        < ShopNow />
      </main>
    </>
  )
}

export default Home
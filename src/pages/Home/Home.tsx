import { FC } from 'react'
import {Fashion ,Brand, Collection, Discount, Gift, Hero, NewCollectionBrands, ShopNow } from "./components"

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
        < Discount />
        <NewCollectionBrands />
        < ShopNow />
      </main>
    </>
  )
}

export default Home
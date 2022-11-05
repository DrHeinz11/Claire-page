import { FC } from 'react'
import { Fashion, Brand, Collection, Discount, Gift, Hero, ShopNow, CareerAdvice } from "./components"

const Home: FC = () => {
  return (
    <main className='main__container'>
      <section>
        <Hero />
      </section>
      <Brand />
      <Collection />
      <Gift />
      <Fashion />
      < Discount />
      <CareerAdvice />
      < ShopNow />
    </main>
  )
}

export default Home
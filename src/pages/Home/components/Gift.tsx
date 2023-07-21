import React from 'react'
import { Link } from 'wouter'

type Props = {}

const Gift = (props: Props) => {
  return (
    <section className="gift__container">
      <article className="gift__copy">
        <h4 className="gift__heading--sub">gift guide 2022</h4>
        <h2 className="gift__heading--title">the gift guide</h2>
        <p className="gift__copy--paragraph">This holiday season, let Claire Marie be your ultimate source of inspiration for finding the perfect gifts for your loved ones. Whether you're shopping for family, friends, or that special someone, our carefully curated Gift Guide has something for everyone.</p>
        <Link to=''>
          <button type="button" className="gift__button cta">GET NOW</button>
        </Link>
      </article>
    </section>
  )
}

export default Gift
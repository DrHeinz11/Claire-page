import React from 'react'

type Props = {}

const Collection = (props: Props) => {
  return (
    <section className="collection__container main__container">
      <div className="collection__logo">
        <img src="accets/logo-claire-simple.svg" alt="" className="logo__claire" />
        <div className="collection__copy">
          <h2 className="collection__title heading__section">new collection in our brands</h2>
          <a href="" className="collection__more cta">see all</a>
        </div>
      </div>

      <div className="collection__img--container" >
        <img src="" alt="" className="collection__img" />
        <img src="" alt="" className="collection__img-2" />
        <img src="" alt="" className="collection__img-3" />
        <img src="" alt="" className="collection__img-4" />
      </div >
    </section>
  )
}

export default Collection
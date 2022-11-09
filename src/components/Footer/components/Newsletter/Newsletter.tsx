import React from 'react'

type Props = {}

const Newsletter = (props: Props) => {
  return (
    <div className='newsletter__container'>
      <h3>NEWSLETTER</h3>
      <form className='newsletter__form--container' action="">
        <label className='newsletter__label--text' htmlFor="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quasi corrupti soluta.
          <input type="text" placeholder="Enter Your Email" name="" id="" />
        </label>
        <label className='newsletter__label--checkbox' htmlFor="">
          <input type="checkbox" name="" id="" />
          With This You Agree To Our Requirements
        </label>
      </form>
      <button className='cta'>Subscribe</button>
    </div>
  )
}

export default Newsletter
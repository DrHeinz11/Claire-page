import {FC} from 'react'
import { Link } from 'wouter'
import { Article, HeadingBox } from '../../../components'

const CarreerAdvice:FC = (props) => {
  return (
    <div className="fashion__container carrer__container">
    <HeadingBox route='asd' section='CAREER ADVICE'>
      <Article route='id' imgUrl='https://cdn.mos.cms.futurecdn.net/WiPib9L8qv7PYB88b3FXwJ-415-80.jpeg' imgAlt='Táche-founder' heading='Startup life helped me heal from a year of loss' paragraph='Táche founder and CEO Roxana Saidi details how delving into her wildly successful pistachio milk venture helped her soul heal from five subsequent tragedies.' />
      <Article route='id' imgUrl='https://cdn.mos.cms.futurecdn.net/WiPib9L8qv7PYB88b3FXwJ-415-80.jpeg' imgAlt='Táche-founder' heading='Startup life helped me heal from a year of loss' paragraph='Táche founder and CEO Roxana Saidi details how delving into her wildly successful pistachio milk venture helped her soul heal from five subsequent tragedies.' />
      <Link to={'/iod'} className="cta">
                See All
            </Link>
    </HeadingBox>
    </div>
  )
}

export default CarreerAdvice
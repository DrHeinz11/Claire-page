import { FC } from 'react'
import { Link } from 'wouter'
import { Article, HeadingBox } from '../../../components'
import { dataCarrer } from '../../../constant/dataCareer'

const CarreerAdvice: FC = (props) => {
  return (
    <div className="fashion__container carrer__container">
      <HeadingBox route='asd' section='CAREER ADVICE'>
        {dataCarrer.map(element => <Article key={element.id} route={element.route} imgUrl={element.imgUrl} imgAlt={element.imgAlt} heading={element.heading} paragraph={element.paragraph} />)}
        <Link to={'/career/all'} className="cta">
          See All
        </Link>
      </HeadingBox>
    </div>
  )
}

export default CarreerAdvice
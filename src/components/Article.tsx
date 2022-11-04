import { FC } from 'react'
import { Link } from 'wouter'
import MiddleHash from './MiddleHash'
import SeeAll from './SeeAll.cta'

type Article = { imgUrl: string, imgAlt: string, heading: string, paragraph: string, route: string }

const Article: FC<Article> = ({ imgUrl, imgAlt, heading, paragraph, route }) => {
    return (
        <article className='article__container'>
            <Link to={route}>
                <picture className="article__picture--container">
                    <img src={imgUrl} alt={imgAlt} className="picture__img" />
                    <source srcSet="" className="picture__img--source" />
                </picture>
            </Link>
            <div className="article__copy--container">
                <MiddleHash />
                <h4 className="article__copy--title">{heading}</h4>
                <p className="article__copy--paragraph">{paragraph}</p>
                <SeeAll className="article__copy--cta" route={route} title="read more" />
            </div>
        </article>
    )
}

export default Article
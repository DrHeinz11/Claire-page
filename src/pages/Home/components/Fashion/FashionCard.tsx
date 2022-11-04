import { FC } from 'react'
import { Link } from 'wouter'

type FashionData = {
    imgUrl: string
    imgAlt: string
    copyTitle: string
    route: string
}

const FashionCard: FC<FashionData> = ({ imgUrl, imgAlt, copyTitle, route }) => {
    return (
        <Link to={route}>
            <div className="fashion__card">
                <img src={imgUrl} alt={imgAlt} className="fashion__card--img" />
                <div className="fashion__copy--container">
                    <span className="fashion__middle--hash"></span>
                    <h3 className="fashion__copy--title">{copyTitle}</h3>
                </div>
            </div>
        </Link>
    )
}

export default FashionCard
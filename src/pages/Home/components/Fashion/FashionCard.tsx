import { FC } from 'react'

type FashionData = {
    imgUrl: string
    imgAlt: string
    copyTitle: string
}

const FashionCard: FC<FashionData> = ({ imgUrl, imgAlt, copyTitle }) => {
    return (
        <div className="fashion__card">
            <img src={imgUrl} alt={imgAlt} className="fashion__card--img" />
            <div className="fashion__copy--container">
                <span className="fashion__middle--hash"></span>
                <h3 className="fashion__copy--title">{copyTitle}</h3>
            </div>
        </div>
    )
}

export default FashionCard
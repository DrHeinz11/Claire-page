import { FC } from 'react'

type Header = { paramsRoute: string,className: string}

const HeadingHash: FC<Header> = ({ paramsRoute, className }) => {
    return (
        <div className={`heading__dash--container ${className}`}>
            <span className="heading__dash--hr"></span>
            <h2 className="heading__dash--title">{paramsRoute}</h2>
            <span className="heading__dash--hr"></span>
        </div>
    )
}

export default HeadingHash
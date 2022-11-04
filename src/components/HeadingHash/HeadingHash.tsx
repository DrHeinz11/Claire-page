import { FC } from 'react'

type Header = { paramsRoute: string,className: string}

const HeadingHash: FC<Header> = ({ paramsRoute, className }) => {
    return (
        <div className={`heading__hash--container ${className}`}>
            <span className="heading__hash--hr"></span>
            <h2 className="heading__hash--title">{paramsRoute}</h2>
            <span className="heading__hash--hr"></span>
        </div>
    )
}

export default HeadingHash
import { FC } from 'react'

type Header = { paramsRoute: string }

const HeadingHash: FC<Header> = ({ paramsRoute }) => {
    return (
        <div className="heading__dash--container">
            <span className="heading__dash--hr"></span>
            <h2 className="heading__dash--title">{paramsRoute}</h2>
            <span className="heading__dash--hr"></span>
        </div>
    )
}

export default HeadingHash
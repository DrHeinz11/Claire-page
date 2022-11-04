import { FC } from 'react'
import { Link } from 'wouter'
import HeadingHash from './HeadingHash/HeadingHash'

type HeadingData = { route: string, section: string, children: React.ReactNode }

const HeadingBox: FC<HeadingData> = ({ route, section, children }) => {
    return (
        <div className="heading__box--container">
            <Link to={`/${route}`}>
                <HeadingHash className="heading--box" paramsRoute={section} />
            </Link>
            <>
                {children}
            </>
        </div>
    )
}

export default HeadingBox
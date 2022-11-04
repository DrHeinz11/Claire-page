import { FC } from 'react'
import { Link } from 'wouter'
type Route = { route: string, title: string, className: string }
const SeeAll: FC<Route> = ({ route, title, className }) => {
    return (
        <Link to={route}>
            <a className={`cta__seeAll ${className}`}>{title}</a>
        </Link>
    )
}

export default SeeAll
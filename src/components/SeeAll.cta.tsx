import { FC } from 'react'
import { Link } from 'wouter'
type Route = { route: string,title: string}
const SeeAll: FC<Route> = ({ route,title }) => {
    return (
        <Link to={route}>
            <a className="cta__seeAll">{title}</a>
        </Link>
    )
}

export default SeeAll
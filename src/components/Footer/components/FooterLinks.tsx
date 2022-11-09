import { FC } from 'react'
import { Link } from 'wouter'
import { footerLinks } from '../../../types/type'



const FooterLinks: FC<footerLinks> = ({ route, title }) => {
  return (
    <Link to={route}>
      <a className="footer__links">{title}</a>
    </Link>
  )
}

export default FooterLinks
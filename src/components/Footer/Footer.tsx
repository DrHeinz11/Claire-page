import { FC } from 'react'
import { Link } from 'wouter'
import { HandleScrollTop } from '../../utils/handleScrollTop'
import ClaireLogo from '../icons/ClaireLogo'
import LinksColums from './components/LinksColums'
import Newsletter from './components/Newsletter/Newsletter'

const Footer: FC = () => {
  return (
    <footer className="footer__container">
      <Link onClick={HandleScrollTop} href='/'>
        <a className="claire__logo">
          <ClaireLogo />
        </a>
      </Link>
      <LinksColums />
      <Newsletter />
      <div className="footer__divider" />
      <p className="footer__copyright">
        <a className="footer__copyright--link" href="https://github.com/Franco-Martin11/" rel="noopener noreferrer" target="_blank">
          @FrancMartin
        </a>
        ©Claire All Right Reserved 2022</p>
    </footer>
  )
}

export default Footer

import { FooterData, footerLinks } from '../../../types/type'
import FooterLinks from './FooterLinks'

type Props = {}
const dataLink: FooterData = [{ heading: 'help', links: [{ title: 'FaQs', route: '/faqs' }, { title: 'payment', route: '/payment' }, { title: 'shopping', route: '/shopping' }, { title: 'call center', route: '/call-center' }] }, { heading: 'company', links: [{ title: 'community', route: '/community' }, { title: 'membership', route: '/membership' }, { title: 'brands models', route: '/brands-models' }, { title: 'address', route: '/address' }] }]

const LinksColums = (props: Props) => {
    return (
        <nav className="links__container">
            {dataLink?.map(element =>
                <nav className="links__column--container">
                    <h3 className="links__column--heading">{element.heading}</h3>
                    {element?.links?.map((element: footerLinks) =>
                        <FooterLinks route={element.route} title={element.title} />)}
                </nav>
            )

            }
        </nav>
    )
}

export default LinksColums
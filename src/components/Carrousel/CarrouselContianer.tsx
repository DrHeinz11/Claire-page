import { FC } from 'react'

type child = {
    children: React.ReactNode
}

const CarrouselContianer: FC<child> = ({ children }) => {
    return (<div className="collection__carrousel--container" >
        {children}
    </div>

    )
}

export default CarrouselContianer
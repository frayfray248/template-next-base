// react
import React from 'react'

// components
import Heading from '@/components/shared/text/Heading'
import Hero from '@/components/shared/containers/Hero'
import Paragraph from '../../components/shared/text/Paragraph'

const HeroFigure = ({ reverse }: { reverse?: boolean }) => {
    return (
        <Hero>
            <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div className='max-w-2xl text-left'>
                <Heading type={2}>Box Office News!</Heading>
                <Paragraph>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</Paragraph>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </Hero>
    )
}

export default HeroFigure
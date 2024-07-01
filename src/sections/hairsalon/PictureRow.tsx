// react
import React from 'react'

// components
import Section from '@/components/shared/containers/Section'
import Image from '@/components/shared/Image'
import Carousel from '@/components/shared/Carousel'

// images
import model1 from '@/res/hair-model-01.webp'
import model2 from '@/res/hair-model-02.webp'
import model3 from '@/res/hair-model-03.webp'
import model4 from '@/res/hair-model-04.webp'
import model5 from '@/res/hair-model-05.webp'

const PictureRow = () => {
    return (
        <Section>
            <Carousel>
                <Image src={model1} alt="A hair model" className='min-w-48' />
                <Image src={model2} alt="A hair model" className='min-w-48' />
                <Image src={model3} alt="A hair model" className='min-w-48' />
                <Image src={model4} alt="A hair model" className='min-w-48' />
                <Image src={model5} alt="A hair model" className='min-w-48' />
            </Carousel>
        </Section >
    )
}

export default PictureRow
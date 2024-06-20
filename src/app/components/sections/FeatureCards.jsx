import React from 'react'

import Section from '../shared/Section'
import Card from '@/app/components/shared/Card'

const FeatureCards = () => {
    return (
        <Section>
            <div className='min-h-screen flex flex-row flex-wrap justify-center items-center gap-16'>
                <Card />
                <Card />
                <Card />
            </div>
        </Section>
    )
}

export default FeatureCards
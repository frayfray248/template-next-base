import React from 'react'

import Section from '@/components/shared/containers/Section'
import Timeline from '@/components/shared/Timeline'

const FeatureTimeline = () => {
    return (
        <Section>
            <div className='min-h-screen flex flex-row flex-wrap justify-center items-center gap-16'>
                <Timeline />
            </div>
        </Section>
    )
}

export default FeatureTimeline
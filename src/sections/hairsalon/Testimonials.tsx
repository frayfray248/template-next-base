// next
import React from 'react'

// components
import Section from '@/components/shared/containers/Section'

const Testimonials = () => {
  return (
    <Section>
        <div className="text-center">
            <h2 className="text-4xl font-bold">Testimonials</h2>
            <p className="text-lg">What our clients say about us</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-base-200 p-4 rounded-lg">
            <p className="text-lg">"I love my new hair! I have never felt so confident in my life. Thank you!"</p>
            <p className="text-lg font-bold">- Jane Doe</p>
            </div>
            <div className="bg-base-200 p-4 rounded-lg">
            <p className="text-lg">"I love my new hair! I have never felt so confident in my life. Thank you!"</p>
            <p className="text-lg font-bold">- Jane Doe</p>
            </div>
            <div className="bg-base-200 p-4 rounded-lg">
            <p className="text-lg">"I love my new hair! I have never felt so confident in my life. Thank you!"</p>
            <p className="text-lg font-bold">- Jane Doe</p>
            </div>
            <div className="bg-base-200 p-4 rounded-lg">
            <p className="text-lg">"I love my new hair! I have never felt so confident in my life. Thank you!"</p>
            <p className="text-lg font-bold">- Jane Doe</p>
            </div>
        </div>
    </Section>
  )
}

export default Testimonials
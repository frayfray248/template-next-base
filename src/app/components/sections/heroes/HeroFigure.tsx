import React from 'react'

const HeroFigure = ({ reverse }: { reverse: boolean }) => {
    return (
        <section className="hero min-h-screen bg-base-200">
            <article className={`hero-content max-w-4xl flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </article>
        </section>
    )
}

export default HeroFigure
import React from 'react'

const Link = ({ href="", children }: { href? : string, children?: React.ReactNode }) => {
    return (
        <a href={href} className="link link-hover">{children}</a>
    )
}

const Title = ({ children }: { children?: React.ReactNode }) => {
    return (
        <h6 className="footer-title">{children}</h6>
    )
}

const Nav = ({ children }: { children?: React.ReactNode }) => {
    return (
        <nav>
            {children}
        </nav>
    )
}

const Section = ({ children, border=false }: { children?: React.ReactNode, border? : boolean }) => {
    return (
        <section className={`footer p-10 bg-base-200 text-base-content ${border && "border-t border-base-300"}`}>
            {children}
        </section>
    )
}

const Footer = ({ children }: { children?: React.ReactNode }) => {
    return (
        <footer>
            {children}
        </footer>
    )
}

export default { Footer, Section, Nav, Title, Link }
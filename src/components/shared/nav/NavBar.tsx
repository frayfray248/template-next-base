import React from 'react'

type NavItem = {
    text: string,
    href: string,
    ariaLabel?: string,
}

const Menu = ({ children }: { children?: React.ReactNode }) => {
    return (
        <ul className='menu menu-md  menu-horizontal p-0 [&_li>*]:rounded-none'>
            {children}
        </ul>
    )
}

const MenuItem = ({ text, href, ariaLabel }: NavItem) => {
    return (
        <li><a href={href} aria-label={ariaLabel}>{text}</a></li>
    )
}

const Submenu = ({ children, title }: { children?: React.ReactNode, title: string }) => {
    return (
        <li className='rounded-none'>
            <details>
                <summary className='rounded-none'>{title}</summary>
                <ul className="p-2 rounded-none ">
                    {children}
                </ul>
            </details>
        </li>
    )
}

const Dropdown = ({ children }: { children?: React.ReactNode }) => {
    return (
    <div className="dropdown">

        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>

        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {children}
        </ul>

    </div>
    )
}

const Start = ({ children }: { children?: React.ReactNode }) => {
    return (
        <section className='navbar-start'>
            {children}
        </section>
    )
}

const Center = ({ children }: { children?: React.ReactNode }) => {
    return (
        <section className='navbar-center hidden lg:flex'>
            {children}
        </section>
    )
}

const End = ({ children }: { children?: React.ReactNode }) => {
    return (
        <section className='navbar-end'>
            {children}
        </section>
    )
}


const Bar = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="navbar">
            {children}
        </div>
    )
}

export default { Bar, Start, Center, End, Menu, MenuItem, Submenu, Dropdown}